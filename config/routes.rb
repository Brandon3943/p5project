Rails.application.routes.draw do
  resources :birds, only: [:index, :show]
 
  root "birds#index"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
