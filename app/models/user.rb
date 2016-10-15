class User < ApplicationRecord
  extend FriendlyId

  friendly_id :full_name, use: :slugged
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :recoverable and :omniauthable
  devise :database_authenticatable, :registerable,
          :rememberable, :trackable, :validatable

  has_many :interests
  has_many :topics, through: :interests

  validates :email, uniqueness: true

  def send_after_signup_email
    Email::User::AfterSignupJob.perform_later(self)
  end

  def full_name
    "#{first_name} #{last_name}"
  end
end
