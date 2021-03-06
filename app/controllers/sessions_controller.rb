class SessionsController < ApplicationController

  def create
    user = User.find_or_create_by(provider: auth_hash['provider'],uid: auth_hash['uid'])
    user.username = auth_hash["extra"]["raw_info"]["username"]
    user.save
    cookies[:auth_token] = user.uid
    session[:user_id] = user.id
    redirect_to '/'
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
