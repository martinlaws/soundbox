Rails.application.routes.draw do

  root 'splash#splash'

  # Routes for Sessions and Authentication
  resources :sessions, only: [:create, :destroy]
    get '/auth/:provider/callback', to: 'sessions#create'

  # Routes for Users, with nested boxes => tracks
  resources :users, except: [:index] do
    resources :boxes do
      resources :tracks
    end
  end

  # Routes for Admins to be able to manage Users
  namespace :admin do
    resources :users
  end

  # Routes for API calls from Google Chrome Extension
  namespace :api do
    resources :users, only: [:create, :update]
  end

end
