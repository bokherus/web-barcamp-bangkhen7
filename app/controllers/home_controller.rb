class HomeController < ApplicationController
  before_action :users

  def index
    @header = "welcome"
  end

  def dummy
    redirect_to '/comingsoon'
  end

  def participants
      @participants = User.all.as_json(
      include: {
         topics: { only: :name }
      },
      except: [
        :created_at,
        :updated_at,
        :shirt_size,
        :code
        ]
      )
  end

  def users
    @user = current_user
  end

  def registration

  end
end
