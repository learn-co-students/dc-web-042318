class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.valid?
        @user.save
        redirect_to snacks_path
    else
        flash[:error] = @user.errors.full_messages
        redirect_to new_user_path
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
