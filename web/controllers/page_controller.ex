defmodule Bacro.PageController do
  use Bacro.Web, :controller

  def index(conn, _params) do
    require Addict.Plugs.Authenticated
    require Plug.Conn

    conn = fetch_session(conn)
    session = get_session(conn, :current_user)

    if Addict.Plugs.Authenticated.is_logged_in(session) do
      render conn, "game.html"
    else
      if conn.request_path == "/" do
        render conn, "index.html"
      else
        redirect(conn, to: "/")
      end
    end
  end
end
