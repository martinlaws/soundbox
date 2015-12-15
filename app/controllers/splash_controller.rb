class SplashController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]

  def splash
    cookies[:auth_token] = "ABC123"

    render :'splash/index'
  end

end
