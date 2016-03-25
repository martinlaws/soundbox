class OptInMailer < ApplicationMailer

  default from: 'Soundbox'

  def opt_in_email(subscriber)
    @subscriber = subscriber
    mail(to: @subscriber.email, subject: 'new message')
  end

end
