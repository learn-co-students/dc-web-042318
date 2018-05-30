Rails.application.routes.draw do

  get 'user/new'
  get 'sessions/new'
  # crud routes :index, :show, :destroy, :edit, :update, :create, :new
  resources :snacks

  resources :retailers, only: [:index, :new, :create, :show]

  resources :users, only: [:new, :create]

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
