class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(username: params['username'])

    # user exists
    if @user
        session[:user_id] = @user.id
        redirect_to snacks_path
    # user doesn't
    else
        flash[:message] = "User could not be found"
        render :new
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end
end
