class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to students_path
    else
      flash[:message] = 'User could not be found'
      redirect_to login_path
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end

end
