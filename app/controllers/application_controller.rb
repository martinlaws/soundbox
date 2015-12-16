class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  protected

  def require_user
    if request.headers["HTTP_AUTHORIZATION"]
      @current_user = User.find_by(uid: request.headers["HTTP_AUTHORIZATION"])
    else
      @current_user = User.find(session[:user_id])
    end
  end

  # before_action :set_account, :authenticate

  # protected
    # def set_account
    #   @account = Account.find_by(url_name: request.subdomains.first)
    # end
    #
    # def authenticate
    #   case request.format
    #   when Mime::XML, Mime::ATOM
    #     if user = authenticate_with_http_token { |t, o| @account.users.authenticate(t, o) }
    #       @current_user = user
    #     else
    #       request_http_token_authentication
    #     end
    #   else
    #     if session_authenticated?
    #       @current_user = @account.users.find(session[:authenticated][:user_id])
    #     else
    #       redirect_to(login_url) and return false
    #     end
    #   end
    # end

end
