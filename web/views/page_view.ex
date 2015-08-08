defmodule Bacro.PageView do
  use Bacro.Web, :view

  def user(conn) do
    conn.private.plug_session["current_user"].username
  end
end
