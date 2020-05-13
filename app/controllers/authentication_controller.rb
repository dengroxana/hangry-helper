class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by(email: params[:login][:email])
    if @user.authenticate(params[:login][:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.id, email: @user.email)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { errors: "unauthorized" }, status: :unauthorized
    end
    
  end

  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end

  private

  def login_params
    params.require(:auth).permit(:email, :password)
  end
end
