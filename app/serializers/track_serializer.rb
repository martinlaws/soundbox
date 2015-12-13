class TrackSerializer < ActiveModel::Serializer
  attributes :url, :title, :artist, :track
end
