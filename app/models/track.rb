class Track < ActiveRecord::Base
  belongs_to :box

  validates :username, :url, :title, :artist, presence: true
end
