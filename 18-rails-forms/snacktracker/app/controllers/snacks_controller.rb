class SnacksController < ApplicationController

	def index
		@snacks = Snack.all
	end

	def show
		@snack = Snack.find(params[:id])
	end

	def new
		@snack = Snack.new
	end

	def create
		@snack = Snack.create(allowed_params)
		redirect_to @snack
	end

    def edit
        @snack = Snack.find(params[:id])
    end

    def update
        @snack = Snack.find(params[:id])
        @snack.update(allowed_params)
        redirect_to @snack
    end

    def destroy
        Snack.destroy(params[:id])
        redirect_to snacks_path
    end

    private

    def allowed_params
        params.require(:snack).permit(:name, :calories, :deliciousness)
    end

end