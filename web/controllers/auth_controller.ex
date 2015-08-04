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

end
