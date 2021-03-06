Rails.application.routes.draw do
  resources :restaurants
  post '/restaurants', to: 'restaurants#create'
  resources :categories, only: :index
  get '/categories', to: 'categories#index'
  post "/auth/login", to: "authentication#login"
  get "/auth/verify", to: "authentication#verify"

  resources :users
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
