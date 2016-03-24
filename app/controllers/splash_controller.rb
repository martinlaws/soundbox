class SplashController < ApplicationController

  def splash
    @subscriber = Subscriber.new
    render :'splash/index', layout: false
  end

end
