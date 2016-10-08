class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :recoverable and :omniauthable
  devise :database_authenticatable, :registerable,
          :rememberable, :trackable, :validatable

  has_many :interests
  has_many :topics, through: :interests

  def send_after_signup_email
    Email::User::AfterSignupJob.perform_later(self)
  end
end
