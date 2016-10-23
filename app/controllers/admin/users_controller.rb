class Admin::UsersController < Admin::BaseController
  def index
    @users = User.all
  end

  def show
    @user = User.friendly.find(params[:id])
  end

  def update
    @user = User.friendly.find(params[:id])
    if @user.update(user_params)
      redirect_to admin_user_path(@user.id), alert: 'User updated'
    else
      flash[:alert] = @user.errors.full_messages
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :first_name,
      :last_name,
      :shirt_size,
      :twitter,
      :workplace,
      :website
    )
  end
end
