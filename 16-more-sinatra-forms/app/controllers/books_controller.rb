class BooksController < ApplicationController

  get "/books" do
    #s show information for all books
    @books = Book.all
    erb :index
  end

  post "/books" do
    # create new book
    # author = params[:author]
    # title = params[:title]
    # snippet = params[:snippet]
    Book.create(params)
    redirect("/books")
  end

  get "/books/new" do
    # show empty form for book creation
    erb :new
  end

  get "/books/:id" do
    # show information for a single book
    id = params[:id]
    @book = Book.find(id)
    erb :show
  end


end
