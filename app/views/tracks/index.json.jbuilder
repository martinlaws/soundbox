json.array!(@tracks) do |track|
  json.extract! track, :id, :url, :box
  json.url track_url(track, format: :json)
  binding.pry
end
