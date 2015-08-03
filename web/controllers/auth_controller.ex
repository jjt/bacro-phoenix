defmodule Bacro.AuthController do
  use Bacro.Web, :controller

  def register(conn, _params) do
    render conn, "register.html"
  end

  def not_logged_in(conn, _params) do
    render conn, "not_logged_in.html"
  end
end
