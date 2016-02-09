class SplashController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :require_user

  def splash
    render layout: false
    render :'splash/index'
  end

end
