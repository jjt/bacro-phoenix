defmodule Bacro.Repo.Migrations.CreateMessage do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :msg, :string
      add :channel, :string
      add :user_id_id, references(:users)

      timestamps
    end
    create index(:messages, [:user_id_id])

  end
end
