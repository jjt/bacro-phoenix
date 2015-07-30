defmodule Bacro.Router do
  use Bacro.Web, :router
  use Addict.RoutesHelper

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Bacro do
    pipe_through :browser # Use the default browser stack
    addict :routes

    get "/", PageController, :index
    get "/register", AuthController, :register
  end

  # Other scopes may use custom stacks.
  # scope "/api", Bacro do
  #   pipe_through :api
  # end
end
