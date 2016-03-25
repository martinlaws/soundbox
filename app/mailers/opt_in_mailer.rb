class OptInMailer < ApplicationMailer

  default from: 'Soundbox'

  def opt_in_email(subscriber)
    @subscriber = subscriber
    mail(to: 'grant@soundbox.co', subject: 'new message')
  end

end
