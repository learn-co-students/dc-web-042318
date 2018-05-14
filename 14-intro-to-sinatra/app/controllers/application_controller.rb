class ApplicationController < Sinatra::Base
	set :views, "app/views"

	get "/" do
		"Hello World"
	end

	get "/books" do
		@books = Book.all
		erb :index
	end

	get "/books/:id" do
		Book.find(params[:id]).title
	end

	get "/:name" do
		@name = params[:name].titlecase
		erb :hello
	end

	set :views, "app/views"

	get "/" do
		erb :hello
	end

	get "/:name" do
		@name = params[:name]
		erb :hello
	end

end
