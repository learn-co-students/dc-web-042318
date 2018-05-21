Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # crud routes :index, :show, :destroy, :edit, :update, :create, :new
  resources :snacks
end
