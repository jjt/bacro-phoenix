defmodule Bacro.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def up do
    create table(:users) do
      add :email, :string
      add :username, :string
      add :hash, :string
      add :recovery_hash, :string

      timestamps
    end

    create index(:users, [:email], unique: true)
  end

  def down do
    drop table(:users)
  end
end
