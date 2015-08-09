defmodule Bacro.ChatController do
  use Bacro.Web, :controller

  def test(conn, _params) do
    resp = %{
      data: "testOOOOOOOOOOOOOOOOO"
    }

    json conn, resp
  end

  def msg(conn, %{"data" => data}) do
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

