Rails.application.routes.draw do
  resources :matches
  resources :decks
  resources :games
  resources :players
  resources :cards, only: [:index, :show]

  get "/test", to: "application#index"
 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
