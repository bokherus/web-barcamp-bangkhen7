class Topic < ApplicationRecord
  has_many :interests
  has_many :users, through: :interests

  validates :name, presence: true, uniqueness: true
end
