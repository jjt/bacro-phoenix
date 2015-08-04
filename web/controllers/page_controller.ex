defmodule Bacro.PageController do
  use Bacro.Web, :controller

  plug Addict.Plugs.Authenticated when action in [:secret, :game]

  def index(conn, _params) do
    render conn, "index.html"
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
