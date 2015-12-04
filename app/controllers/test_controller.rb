require 'soundcloud'

class TestController < ApplicationController

  def index
    @client = SoundCloud.new(:client_id => Rails.application.secrets.soundcloudkey)
    @tracks = @client.get('/tracks', :limit => 100, :order => 'pop')
    render :'/test/index'
  end

end
