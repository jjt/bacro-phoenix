defmodule Bacro.PageView do
  use Bacro.Web, :view

  def username(conn) do
    conn.private.plug_session["current_user"].username
  end
end
