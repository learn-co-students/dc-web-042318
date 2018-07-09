class AuthController < ApplicationController

  skip_before_action :authenticate, only: [:login]

  # post to /login with { username: 'some name', password: 'some password' }
  # if valid, respond with jwt token
  # if not valid, respond with some error message
  def login
    user = User.find_by(name: params[:username])
    if user && user.authenticate(params[:password])
      # send back the token
      # token should be a JWT token
      token = encode({user_id: user.id})
      render json: { authenticated: true, token: token }
    else
      # send back some kind of error
      render json: { authenticated: false}, status: 401
    end
  end

end
