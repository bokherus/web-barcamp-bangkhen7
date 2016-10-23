class Admin::SessionsController < Admin::BaseController

  before_action :set_session, only: [:show, :edit, :update, :destroy]

  def new
    @session = Session.new
  end

  def create
    @session = Session.new
  end

  def index
    @sessions = Session.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    if @session.destroy
      # TODO Do something
    else
    end
  end

  private
  def set_session
    @session = Session.find(params[:id])
  end
end
