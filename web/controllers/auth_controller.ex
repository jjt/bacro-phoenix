defmodule Bacro.AuthController do
  use Bacro.Web, :controller
  import Plug.Conn

  def register(conn, _params) do
    render conn, "register.html"
  end

  def logout(conn, _params) do
    conn = conn
            |> fetch_session
            |> delete_session(:current_user)

    redirect(conn, to: "/")
  end

  def login(conn, params) do
    alias Addict.ManagerInteractor
    alias Addict.SessionInteractor

    email = params["email"]
    password = params["password"]

    {conn, result} = ManagerInteractor.verify_password(email, password)
      |> SessionInteractor.login(conn)

    if Dict.has_key?(result, :user) do
      alias Phoenix.Token
      require IO
      IO.inspect result
      IO.inspect conn.private.plug_session
    else
      conn = conn |> put_flash(:auth, "Error logging in with that password for #{email}")
    end

    redirect conn |> Map.put(:status, nil), to: "/"
  end
end
