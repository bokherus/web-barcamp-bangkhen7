class Users::SessionsController < Devise::SessionsController
    # before_action :configure_sign_in_params, only: [:create]

    # GET /resource/sign_in
    def new
      redirect_to root_path
    end

    # POST /resource/sign_in
    def create
        resource = User.find_for_database_authentication(email: params[:email])
        return render :json => {:success => false, :error => "Wrong email or password"} unless resource

        if resource&.valid_password?(params[:password])
            sign_in :user, resource
            return redirect_to root_path
            # return respond_with resource, location: after_sign_in_path_for(resource)
        end
        return render :json => {:success => false, :error => "Wrong email or password"}
        # redirect_to root_path
    end

    # DELETE /resource/sign_out
    # def destroy
    #   super
    # end
    def after_sign_in_path_for(resource)
      profile_path
    end


    # If you have extra params to permit, append them to the sanitizer.
    # def configure_sign_in_params
    #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
    # end
end
