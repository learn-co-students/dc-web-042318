class ApplicationController < ActionController::Base

    helper_method :current_user

    # memoization
    def current_user
        # if @current_user
        #     @current_user
        # else
        #     @current_user = User.find_by(id: session[:user_id])
        # end

        @current_user ||= User.find_by(id: session[:user_id])
    end
end
