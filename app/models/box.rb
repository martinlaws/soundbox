class Box < ActiveRecord::Base
  belongs_to :user
  has_many :tracks, :dependent => :destroy

  validates :name, :user_id, presence: true
end
