class Track < ActiveRecord::Base
  
  belongs_to :box

  validates :url, :artist, :title, presence: true

end
