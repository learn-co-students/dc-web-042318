# Deliverables
- As a site visitor, I should be able to:
  - see a list of books
  - click on a book title to see more information about that book
  - see a form where I create a book
  - see a form where I can update a book
  - delete a book
- Stretch goals:
  - associate a book with an existing author
  - see a list of authors

# Read
index => get to /books, renders index.erb
  - see all the books
show => get to /books/id, renders show.erb
  - see a specific book

# Create
new => get to /books/new, renders new.erb
  - see a form for a new book
create => post to /books, redirects to index
  - create a book

# Update
edit => get to /books/id/edit, render edit.erb
  - see an edit form for a book
update => patch to /books/id, redirects to show
  - make the book updates

# Delete
delete => delete to /books/id
