module Adapter

  class GoogleBooks

    BASE_URL = "https://www.googleapis.com/books/v1/volumes"

    attr_reader :term

    def initialize(term = nil)
      @term = term
    end


    def fetch_books
      if self.term
        url = "#{BASE_URL}?q=#{self.term}&maxResults=40"
      else
        url = "#{BASE_URL}?q=subject:fiction&maxResults=40"
      end
      response = RestClient.get(url)
      data = JSON.parse(response.body)
      #iterate over all the books in that response
      books = data['items'].each do |book_data|
        book = Book.find_or_initialize_by(title: book_data['volumeInfo']['title'], description: book_data['volumeInfo']['description'])

        if  book_data['volumeInfo']['authors']
          author_name =  book_data['volumeInfo']['authors'].first
          author = Author.find_or_create_by(name: author_name)
        end

        # create and save the book objects and associated authors
        book.author = author
        book.save
        book
      end
    end
  end
end