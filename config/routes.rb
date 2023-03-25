Rails.application.routes.draw do
 
  get "/test", to: "application#index"
  # root "birds#index"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
