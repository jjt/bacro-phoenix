defmodule Bacro.RoomChannel do
  use Phoenix.Channel

  def join("rooms:lobby", auth_msg, socket) do
    require IO
    {:ok, socket}
  end
  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("msg", %{"msg" => msg}, socket) do
    broadcast! socket, "msg", %{msg: msg}
    {:noreply, socket}
  end

end
