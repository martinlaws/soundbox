class User < ActiveRecord::Base
  has_many :boxes
  has_many :sessions

  validates :username, presence: true
end
