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
    redirect_to retailers_path
  end

  private

  def retailer_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end

end
