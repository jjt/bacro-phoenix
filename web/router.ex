defmodule Bacro.Router do
  use Bacro.Web, :router
  use Addict.RoutesHelper

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Bacro do
    pipe_through :browser # Use the default browser stack

    # Basically a single page app
    get "/", PageController, :index
    get "/game/:game_id", PageController, :index
  end

  scope "/", Bacro do
    pipe_through :browser

    get "/register", AuthController, :register
    get "/logout", AuthController, :logout
    post "/login", AuthController, :login
  end

  scope "/api/chat", Bacro do
    pipe_through :api

    get "/test", ChatController, :test
    post "/msg", ChatController, :msg
  end

  scope "/" do
    pipe_through :browser
    addict :routes
  end

  # Other scopes may use custom stacks.
  # scope "/api", Bacro do
  #   pipe_through :api
  # end
end
