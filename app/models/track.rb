class Track < ActiveRecord::Base
  belongs_to :box

  validates :username, :url, :track_info, presence: true
end
