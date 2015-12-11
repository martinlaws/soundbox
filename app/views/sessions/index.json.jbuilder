json.array!(@sessions) do |session|
  json.extract! session, :id, :user_id, :provider, :uid, :index, :create, :destroy
  json.url session_url(session, format: :json)
end
