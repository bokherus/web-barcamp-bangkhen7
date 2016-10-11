class HomeController < ApplicationController
  def index
    @header = "welcome"
  end

  def dummy
    redirect_to '/comingsoon'
  end

  def participants
      @participants = User.all.as_json
  end
end
