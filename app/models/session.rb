class Session < ApplicationRecord
  validates :name, presence: true
end
