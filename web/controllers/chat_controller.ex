defmodule Bacro.ChatController do
  use Bacro.Web, :controller

  def test(conn, _params) do
    json conn, %{test: "testOOOOOOOOOOOOOOOOO"}
  end
end

