class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= session[@current_user.id] &&
      User.find(session[@current_user.id])
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
