class Admin::RegistrationController < Admin::BaseController
  before_action :authenticate_admin!

  def index
    @users = User.all.order(:id).as_json(
    except: [
      :created_at,
      :updated_at
      ]
    )
  end

  def show
    @user = User.find_by(code: params[:search])
  end

  def checkin
    @user = User.find_by(code: params[:code])
    if @user
      UserCheckin.create(user: @user)
    end
  end
end
