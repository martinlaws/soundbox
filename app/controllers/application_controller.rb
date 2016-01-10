class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  protected

  def require_user
    # @current_user = User.find(1) 
    if request.headers["HTTP_AUTHORIZATION"]
      @current_user = User.find_by(uid: request.headers["HTTP_AUTHORIZATION"])
    else
      @current_user = User.find(session[:user_id])
    end
  end
  
end
