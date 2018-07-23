class PlayersController < ApplicationController
  def index
    render json: Player.all
  end
end
