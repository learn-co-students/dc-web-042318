class DirectorsController < ApplicationController
  def show
    @director = Director.find(params[:id])
  end

  def index
    @directors = Director.all
  end
end
