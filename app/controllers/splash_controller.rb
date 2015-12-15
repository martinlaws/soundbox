class SplashController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]

  def splash
    render :'splash/index'
  end

end
