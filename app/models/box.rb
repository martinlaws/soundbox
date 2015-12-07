class Box < ActiveRecord::Base
  belongs_to :user
  has_many :tracks

  validates :name, :user_id, presence: true
end
