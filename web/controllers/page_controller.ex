defmodule Bacro.PageController do
  use Bacro.Web, :controller

  def index(conn, _params) do
    conn = fetch_session(conn)
    session = get_session(conn, :current_user)

    require Addict.Plugs.Authenticated
    if Addict.Plugs.Authenticated.is_logged_in(conn) do
      assign(conn, :current_user, session)
      render conn, "game.html"
    else
      render conn, "index.html"
    end
  end

  def error(conn, _params) do
    render conn, "error.html"
  end

  def not_logged_in(conn, _params) do
    render conn, "not_logged_in.html"
  end

  def secret(conn, _params) do
    render conn, "secret.html"
  end

  def game(conn, _params) do
    render conn, "game.html"
  end

end
