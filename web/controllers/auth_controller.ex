defmodule Bacro.AuthController do
  use Bacro.Web, :controller

  def register(conn, _params) do
    render conn, "register.html"
  end
end
