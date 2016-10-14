class HomeController < ApplicationController
  before_action :users

  def index
    @header = "welcome"
  end

  def dummy
    redirect_to '/comingsoon'
  end

  def participants
      @participants = User.all.as_json
  end

  def users
    @user = current_user
  end

  def registration
    @interests = Topic.pluck(:name)
  end

  def resend
    return render :resend if request.get?
    user = User.find_by(email: params['email'])
    user&.send_after_signup_email
  end
end
