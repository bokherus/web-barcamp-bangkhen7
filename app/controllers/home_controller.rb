class HomeController < ApplicationController
  before_action :users

  def index
    @header = "welcome"
  end

  def dummy
    redirect_to '/comingsoon'
  end

  def participants
      require 'json'
      file = File.read('app/controllers/static-data/participants.json')
      @participants = JSON.parse(file).as_json(
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
      # @participants = User.all.order(:id).as_json(
      # include: {
      #    topics: { only: :name }
      # },
      # except: [
      #   :created_at,
      #   :updated_at,
      #   :shirt_size,
      #   :code
      #   ]
      # )
  end

  def users
    @user = current_user
  end

  def registration
    @interests = Topic.pluck(:name)
    @user_info = session[:error_user]
    @error_messages = session[:error_messages]
    session[:error_user] = nil
    session[:error_messages] = nil
  end

  def resend
    return render :resend if request.get?
    user = User.find_by(email: params['email'])
    user&.send_after_signup_email
  end

  def sessions
    require 'json'
    file = File.read('app/controllers/static-data/sessions.json')
    @sessions = JSON.parse(file).as_json(except: [:id, :created_at, :updated_at])
  end

  def welcome
    @user = User.friendly.find(params['id']).as_json(
    except: [
      :created_at,
      :updated_at,
      :shirt_size,
      :code
      ]
    )
  end
end
