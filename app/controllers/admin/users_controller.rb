class Admin::UsersController < Admin::BaseController
  def index
    @users = User.all
  end

  def show
    @user = User.friendly.find(params[:id])
  end

  def update
  end
end
