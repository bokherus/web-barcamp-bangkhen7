class Users::SessionsController < Devise::SessionsController
    # before_action :configure_sign_in_params, only: [:create]

    # GET /resource/sign_in
    def new
      redirect_to root_path
    end

    # POST /resource/sign_in
    def create
        resource = User.find_for_database_authentication(email: params[:email])
        return redirect_to root_path unless resource

        if resource&.valid_password?(params[:password])
            sign_in :user, resource
            return respond_with resource, location: after_sign_in_path_for(resource)
        end

        redirect_to root_path
    end

    # DELETE /resource/sign_out
    # def destroy
    #   super
    # end

    protected

    def invalid_login_attempt
        set_flash_message(:alert, :invalid)
        render json: flash[:alert], status: 401
    end

    # If you have extra params to permit, append them to the sanitizer.
    # def configure_sign_in_params
    #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
    # end
end
