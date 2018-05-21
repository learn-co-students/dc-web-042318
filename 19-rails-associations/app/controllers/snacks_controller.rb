class SnacksController < ApplicationController

    before_action :find_snack, only: [:show, :edit, :update]
    
    def index
        @snacks = Snack.all
    end

    def show
    end

    def new
        @snack = Snack.new
        @snack.build_retailer()
    end

    def create
        byebug
        @snack = Snack.create(get_snack_params)
        redirect_to @snack
    end

    def edit
    end

    def update
        @snack.update(get_snack_params)
        redirect_to @snack

    end

    def destroy
        Snack.destroy(params[:id])
        redirect_to snacks_path
    end

    private

    def get_snack_params
        params.require(:snack).permit(:name, :deliciousness, :calories, :retailer_id,
            retailer_attributes: [:name, :year_established, :country])
    end

    def find_snack
        @snack = Snack.find(params[:id])
    end
end