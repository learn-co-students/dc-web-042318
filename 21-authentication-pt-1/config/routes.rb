Rails.application.routes.draw do

  # crud routes :index, :show, :destroy, :edit, :update, :create, :new
  resources :snacks

  resources :retailers, only: [:index, :new, :create, :show]

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
end
