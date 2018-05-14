class CLI

  def run
    seed_db
    continue = true
    puts welcome
    while continue
      request = get_input
      continue = render_response(request)
    end
  end

  def get_input
    print_empty_line
    puts 'Enter a request:'
    gets.chomp
  end


  def render_response(request)
    print_empty_line

    if request == '/'
      puts welcome
    elsif request == '/about'
      puts 'type "/books" to see all the books'
      puts 'type "/books/:id" to see a specific book'
      puts 'type "/exit" to quit'
    elsif request == '/books'
      puts 'All the books'
      render_all_books
    elsif request.match(/\/books\/*/)
      id = request.split('/')[2]
      puts "Book #{id}"
      render_specific_book(id)
    elsif request == '/exit'
      return false
    else
      puts 'Sorry we do not understand to this request (404)'
    end
    true
  end

  def render_all_books
    Book.all.each do |book|
      puts "#{book.id}. #{book.title}"
    end
  end


  def render_specific_book(id)
    book = Book.find_by(id: id)
    if book
      puts "\"#{book.title}\" by #{book.author_name}"
      puts "Summary: #{book.description[0...280]}..."
    else
      puts 'No book with that id was found'
    end
  end

  def welcome
    'Welcome to the Library Searcher'
  end

  private

  def seed_db
    # call google api
    # get books
    # persist to database
    Adapter::GoogleBooks.new.fetch_books
  end

  def print_empty_line
    puts "\n"
  end

end
