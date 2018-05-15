class BooksController < ApplicationController

	get "/books" do 
		@books = Book.all
		erb :index
	end

	post "/books" do
		# author = params[:author]
		# title = params[:title]
		# snippet = params[:snippet]

		book = Book.create(params)
		redirect("/books/#{book.id}")

	end

	get "/books/new" do
		erb :new
	end

	get "/books/:id" do
		id = params[:id]
		@book = Book.find(id)
		erb :show
	end

end