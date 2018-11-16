Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :projects, only: [:create, :index, :show, :edit, :destroy]
    resources :steps, only: [:create, :edit, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end
