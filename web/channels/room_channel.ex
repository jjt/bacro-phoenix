defmodule Bacro.RoomChannel do
  use Phoenix.Channel

  def join("rooms:" <> id, auth_msg, socket) do
    require IO
    IO.inspect auth_msg
    {:ok, socket}
  end

  def join("rooms:" <> _private_room_id, _auth_msg, socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("msg", %{"msg" => msg}, socket) do
    require IO
    IO.inspect socket
    broadcast! socket, "msg", %{msg: msg}
    {:noreply, socket}
  end

  defp persist_msg(msg) do
    require Plug.Conn
    alias Bacro.Message
    alias Bacro.Repo

    user = conn
            |> fetch_session
            |> get_session "current_user"

    data = Map.merge(data, %{"user_id" => user.id})
    changeset = Message.changeset(%Message{}, data)

    case Repo.insert(changeset) do
      {:ok, _data} ->
        resp = %{
          data: %{
            msg: data["msg"],
            user: user.username,
            time: 2893498273
          }
        }
        conn |> json resp

      {:error, changeset} ->
        resp = %{
          errors: [
            %{
              title: "Error saving message"
            }
          ]
        }
        conn |> json resp
    end
  end
end
