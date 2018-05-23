class SnacksController < ApplicationController

    before_action :find_snack, only: [:show, :edit, :update]
    
    def index
        @snacks = Snack.all
    end

    def show
    end

    def new
        @snack = Snack.new
        @retailer = @snack.build_retailer
    end

    def create
        @snack = Snack.new(get_snack_params)
        if @snack.valid?
            @snack.save
            redirect_to @snack
        else
            render :new

        end
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
        params.require(:snack).permit(
            :name, :deliciousness, :calories, :retailer_id,
            retailer_attributes: [:name, :year_established])
    end

    def find_snack
        @snack = Snack.find(params[:id])
    end
end