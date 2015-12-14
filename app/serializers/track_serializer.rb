class TrackSerializer < ActiveModel::Serializer
  attributes :id, :url

  belongs_to :box
end
