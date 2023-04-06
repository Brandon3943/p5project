Rails.application.routes.draw do
  resources :matches
  resources :decks
  resources :games
  resources :players
  resources :cards, only: [:index, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "players#show"

 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
