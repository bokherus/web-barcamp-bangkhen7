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

  end

  def resend

  end
end
