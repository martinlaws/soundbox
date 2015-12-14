class Track < ActiveRecord::Base
  belongs_to :box

  validates :url, :box_id, presence: true
end
