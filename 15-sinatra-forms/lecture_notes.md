-Introduce REST / CRUD
	show anatomy of route handler
	show restful routing to HTTP

-Build out CRUD app
	-Build "/" in Application Controller
		-show request object
	-Build Book database (migrate and seed)
	-Show all book page
		-Build bookscontroller
		-add `use BooksController` to config.ru
		-
		-leave views configuration in Application Controller, trigger view not found error, have BooksController inherit from ApplicationController
	-Show individual book page
		-emphasize dynamic routes
		-build route, drop pry in to see params

	-Create book page
		/books/new - empty form, post to 
		* Put the URL after the ID one to show routing order
		- only include input type and placeholder--leave off name
		- put pry in post method
		- fill in method="POST" and action="/books"
		- show empty params
		- redirect("/books/#{book.id}") 
		- add name to input type
		- show creation of a few books
		- change to create(params)
		
	-Edit book page

