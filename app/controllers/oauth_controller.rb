class OauthController < ApplicationController

  def login
    # create client object with app credentials
    client = Soundcloud.new(:client_id => Rails.application.secrets.soundcloudkey,
                            :client_secret => Rails.application.secrets.secret_key_base,
                            :redirect_uri => 'http://soundbox-app.herokuapp.com/oauth/complete')
                            # redirect user to authorize URL
    redirect_to client.authorize_url()
  end

  def complete
    client = Soundcloud.new(:client_id => Rails.application.secrets.soundcloudkey,
                        :client_secret => Rails.application.secrets.secret_key_base,
                        :redirect_uri => 'http://soundbox-app.herokuapp.com/oauth/complete')
    # redirect_to client.authorize_url()
    code = params[:code]
    access_token = client.exchange_token(code: code)

    binding.pry
    @user = User.find_by(token: access_token)
    unless @user.present?
      @user = User.create(token: access_token)
    end
    render json: @user
  end

end
