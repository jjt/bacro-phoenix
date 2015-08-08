defmodule Bacro.ChatController do
  use Bacro.Web, :controller

  def test(conn, _params) do
    resp = %{
      data: "testOOOOOOOOOOOOOOOOO"
    }
    json conn, resp
  end

  def msg(conn, _params) do
    resp = %{
      data: %{
        msg: "Message goes here"
      }
    }
    json conn, resp
  end

end

