class UserCheckin < ApplicationRecord
  belongs_to :user
  validates :user, uniqueness: true, presence: true
end
