class TrackSerializer < ActiveModel::Serializer

  attributes :url, :title, :artist

  # attributes :id, :url

  # has_one :box
end
