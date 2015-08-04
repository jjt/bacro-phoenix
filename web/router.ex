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

    get "/", PageController, :index
    get "/game", PageController, :game
    get "/error", PageController, :error
    get "/secret", PageController, :secret

    get "/not-logged-in", AuthController, :not_logged_in
    get "/auth/register", AuthController, :register
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
