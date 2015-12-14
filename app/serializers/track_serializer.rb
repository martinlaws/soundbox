class TrackSerializer < ActiveModel::Serializer
  attributes :id, :url

  has_one :box
end
