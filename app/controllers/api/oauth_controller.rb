class OauthController < ApplicationController

  def create
    @user = User.find_by(token: params[:token])
    unless @user.present?
      @user = User.create(token: params[:token])
    end
    render json: @user
  end

end
