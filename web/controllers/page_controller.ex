defmodule Bacro.PageController do
  use Bacro.Web, :controller

  def index(conn, _params) do
    require Addict.Plugs.Authenticated

    conn = fetch_session(conn)
    session = get_session(conn, :current_user)
    is_logged_in = Addict.Plugs.Authenticated.is_logged_in(session)

    if is_logged_in do
      assign(conn, :current_user, session)
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
