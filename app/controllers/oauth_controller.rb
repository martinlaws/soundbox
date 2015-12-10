class OauthController < ApplicationController

  def login
    # create client object with app credentials
    client = Soundcloud.new(:client_id => Rails.application.secrets.soundcloudkey,
                            :client_secret => Rails.application.secrets.secret_key_base,
                            :redirect_uri => 'http://localhost:3000/oauth/complete')
                            # redirect user to authorize URL
    redirect_to client.authorize_url()
  end

  def complete
    binding.pry
    client = Soundcloud.new(:client_id => Rails.application.secrets.soundcloudkey,
                        :client_secret => Rails.application.secrets.secret_key_base,
                        :redirect_uri => 'http://localhost:3000/oauth/complete')
    code = params[:code]
    access_token = client.exchange_token(code: code)
    @user = User.find_by(token: access_token)
    unless @user.present?
      @user = User.create(token: access_token)
    end
    render json: @user
  end

end
