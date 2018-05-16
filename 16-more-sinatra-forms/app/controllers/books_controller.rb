class BooksController < ApplicationController

  set :views, 'app/views/books'

  get "/books" do
    # show information for all books
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

  get "/books/:id/edit" do
    # show the book form
    @book = Book.find(params[:id])
    erb :edit
  end

  patch "/books/:id" do
    @book = Book.find(params[:id])
    @book.update(params[:book])
    redirect("/books/#{@book.id}")
  end

  delete "/books/:id" do
    @book = Book.find(params[:id])
    @book.destroy
    redirect("/books")
  end

end
