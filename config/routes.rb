Rails.application.routes.draw do

  # Roots to a simple splash page. People can subscribe to get info on the release
  root 'subscribers#new'
  resources :subscribers, only: [:new, :create]

  # Custom routes for inbox
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

  # Routes for admins to be able to manage users
  namespace :admin do
    resources :users
  end

  # Routes for API calls from Google Chrome Extension
  namespace :api do
    resources :users, only: [:create, :update] do
      post '/users/:id/boxes/:box_id', to: '/api/users#update'
      post 'boxes/:box_id/tracks', to: '/api/users#create'
    end
    resources :tracks, only: [:create, :update, :destroy]
  end

  post '/api/tracks/share', to: 'api/tracks#share'

end
