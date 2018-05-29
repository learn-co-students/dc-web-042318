class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    # user exists
    if @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to snacks_path
    # user doesn't exist
    else
        @user = nil
        flash[:message] = "Username and password do not match"
        redirect_to login_path
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end
end
