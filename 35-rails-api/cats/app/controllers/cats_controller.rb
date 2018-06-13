class CatsController < ApplicationController
  def index
    render json: Cat.all.includes(:hobbies)
  end

  def show
    render json: Cat.find(params[:id])
  end

  # we don't need a whole page for the form

  # def new
  # end

  def create
    render json: Cat.create(cat_params)
  end

  # def edit
  # end

  def update
    render json: Cat.find(params[:id]).update(cat_params)
  end

  def delete
    # check my work
    render json: Cat.find(params[:id]).destroy
  end
end
