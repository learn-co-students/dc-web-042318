class AuthorsController < ApplicationController

  set :views, 'app/views/authors'

  get "/authors" do
    # show information for all authors
    @authors = Author.all
    erb :index
  end

  # as an exercise, build out author crud!
  
end
