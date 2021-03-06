Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :projects, only: [:create, :index, :show, :update, :destroy] do
      resources :comments, only: [:create, :update, :destroy]
    end
    resources :steps, only: [:create, :edit, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
