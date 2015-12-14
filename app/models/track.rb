class Track < ActiveRecord::Base
  belongs_to :box

  validates :url, :title, :artist, presence: true
end
