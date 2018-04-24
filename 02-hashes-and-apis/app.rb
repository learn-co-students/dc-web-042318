require 'pry'
require 'rest-client'
require 'json'

def fetch_books(search_query)
  sanitized_params = sanitize_search_term(search_query)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{sanitized_params}"
  response = RestClient.get(url)
  hash = JSON.parse(response)
  if hash.fetch('totalItems') == 0
    puts "No Books Found"
  else
    books = hash.fetch('items')
    print_books(books)
  end
end

def sanitize_search_term(search_query)
  search_query.split(" ").join("+")
end

def print_books(books)
  books.each do |book|
    print_book(book)
  end
end

def print_book(book)
  puts '***********'
  puts get_title(book)
  puts "Authors: #{get_authors(book)}"
end

def get_title(book)
  book['volumeInfo']['title']
end

def get_authors(book)
  if book['volumeInfo'].has_key?('authors')
    authors = book['volumeInfo'].fetch('authors')
    authors.join(", ")
  else
    'Anonymous'
  end
end

fetch_books('pineapple pancakes')

# printing a single book
# going through all the books
# made a request for books
