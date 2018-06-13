class HobbiesController < ApplicationController
  def show
    render json: Hobby.find(params[:id])
  end

  def index
    render erb: :index
  end
end
