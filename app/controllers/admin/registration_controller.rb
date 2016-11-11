class Admin::RegistrationController < ApplicationController
  layout 'admin'
  def index
  end

  def show
    @user = User.find_by(code: params[:search])
  end
end
