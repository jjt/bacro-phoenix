defmodule Bacro.PageView do
  use Bacro.Web, :view

  def csrf(conn) do
    conn.private.plug_session["_csrf_token"]
  end

  def user(conn) do
    conn.private.plug_session["current_user"].username
  end
end
