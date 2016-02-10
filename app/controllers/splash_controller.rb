class SplashController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :require_user

  def splash
    render :'splash/index', layout: false
  end

end
