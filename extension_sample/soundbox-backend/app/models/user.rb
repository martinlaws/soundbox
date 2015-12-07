class User < ActiveRecord::Base
  has_many :boxes

  validates :username, presence: true
end
