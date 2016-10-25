class Admin::SessionsController < Admin::BaseController

  before_action :set_session, only: [:show, :edit, :update, :destroy]

  def new
    @session = Session.new
  end

  def create
    @session = Session.create(session_params)
    if @session.persisted?
      redirect_to admin_sessions_path, success: 'Session created'
    else
      flash[:danger] = @session.errors.full_messages.shift.strip
      render :new
    end
  end

  def index
    @sessions = Session.all.order(:start_time)
  end

  def edit
  end

  def update
    if @session.update(session_params)
      redirect_to edit_admin_session_path(@session.id), success: 'Session updated'
    else
      flash[:danger] = @session.errors.full_messages.shift.strip
      render :edit
    end
  end

  def destroy
    if @session.destroy
      redirect_to admin_sessions_path, danger: 'Session deleted'
    else
      redirect_to admin_sessions_path, danger: @session.errors.full_messages.shift.strip
    end
  end

  private

  def set_session
    @session = Session.find(params[:id])
  end

  def session_params
      params.require(:session).permit(
        :name,
        :speaker,
        :start_time,
        :end_time,
        :location
      )
  end
end
