Rails.application.routes.draw do

  root 'splash#splash'
  get 'users/:id/boxes/inbox', to: 'boxes#inbox'
  post '/inbox/:track_id', to: 'boxes#move'
  delete 'track/:id', to: 'boxes#inbox_track_destroy'

  # Routes for Sessions and Authentication
  resources :sessions, only: [:create, :new, :destroy]
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
    # resources :users, only: [:create, :update]
    resources :users, only: [:create, :update] do
      post '/users/:id/boxes/:box_id', to: '/api/users#update'
      post 'boxes/:box_id/tracks', to: '/api/users#create'
    end
    resources :tracks, only: [:create, :update]
  end

end
