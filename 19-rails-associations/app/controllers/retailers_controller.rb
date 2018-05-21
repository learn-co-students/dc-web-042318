class RetailersController < ApplicationController
  def index
    @retailers = Retailer.all
  end
end
