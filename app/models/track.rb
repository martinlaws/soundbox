class Track < ActiveRecord::Base
  belongs_to :box

  validates :url, presence: true
end
