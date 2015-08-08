defmodule Bacro.ChatController do
  use Bacro.Web, :controller

  def test(conn, _params) do
    resp = %{
      data: "testOOOOOOOOOOOOOOOOO"
    }

    json conn, resp
  end

  def msg(conn, _params) do
    require Plug.Conn

    user = conn
            |> fetch_session
            |> get_session "current_user"

    resp = %{
      data: %{
        msg: "Message goes here",
        user: user.username,
        time: 2893498273
      }
    }

    conn |> json resp
  end

end

