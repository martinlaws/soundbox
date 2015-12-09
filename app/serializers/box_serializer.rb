class BoxSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :tracks
end
