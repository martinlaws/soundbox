Rails.application.config.middleware.use OmniAuth::Builder do
  provider "soundcloud", Rails.application.secrets.soundcloud_client_id, Rails.application.secrets.soundcloud_secret_key
end
