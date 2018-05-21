Rails.application.routes.draw do
  get 'retailers/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CRUD routes :index, :show, :destroy, :edit, :update, :create, :new
  resources :snacks
end
