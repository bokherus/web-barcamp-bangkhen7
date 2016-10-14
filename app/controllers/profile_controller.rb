class ProfileController < ApplicationController
  def index
    return redirect_to root_path unless user_signed_in?
    @user = current_user
  end
end
