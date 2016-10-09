class HomeController < ApplicationController
  def index
    @header = "welcome"
  end

  def dummy
    redirect_to '/comingsoon'
  end
end
