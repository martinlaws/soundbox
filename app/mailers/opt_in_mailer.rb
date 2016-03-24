class OptInMailer < ApplicationMailer

  default from: 'Soundbox'

  def opt_in_email(subscriber)
    @subscriber = subscriber
    mail(to: 'oliver.androi@gmail.com', subject: 'new message')
  end

end
