Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/login', to: 'auth#login'
  get '/user', to: 'users#show_user'
  resources :users
end
