require_relative "../models/retailer.rb"

class RetailersController < ApplicationController

  def index
    @retailers = Retailer.all
  end

  def new
    @retailer = Retailer.new
    @snack = @retailer.snacks.build
  end

  def create
    @retailer = Retailer.create(retailer_params)
    if @retailer.valid?
      redirect_to retailers_path
    else
      render :new
    end
  end

  def show
    # byebug
    @retailer = Retailer.find(params[:id])
  end

  private

  def retailer_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end

end
