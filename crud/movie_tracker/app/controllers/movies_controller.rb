class MoviesController < ApplicationController

    def index
        @movies = Movie.all
    end

    def show
        @movie = Movie.find(params[:id])
    end

    def new
        @movie = Movie.new
    end

    def create
        @movie = Movie.create(movie_params)
        if @movie.valid?
            redirect_to @movie
        else
            # byebug
            render 'new'
        end
    end

    def edit
        @movie = Movie.find(params[:id])
    end

    def update
        @movie = Movie.find(params[:id])
        @movie.update(movie_params)
        redirect_to @movie
    end

    def destroy
        Movie.destroy(params[:id])
        redirect_to movies_path
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :year, :director_id)
    end
end
