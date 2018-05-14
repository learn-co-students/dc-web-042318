Objectives:
Explain the Model View Controller (MVC) pattern and give an example
Explain how web frameworks (like Sinatra) use the MVC pattern and why
Define 'convention over configuration'
Implement one model that inherit from ActiveRecord
Implement one controller to route and process requests
Demonstrate how the params hash changes and where the data comes from
Implement ERB template and get it to render data from controller and model
Practice file structure in Sinatra
Identify the connection between REST and CRUD

***************

explain 'rack' in gemfile

compare to project code
	-seeds
	-schema
	-migrations
	-environment
	-models (inheriting from Active Record)
	-rakefile

Adapter is for seed data -- briefly touch on and explain it just gets data from api


config.ru is entry point into code; rack is looking for that

config.ru
	require_relative './config/environment'
	run ApplicationController

MVC structure (show relevant directory structure)
	- agreed convention to separate code purposes
	- models
		-hold and manage data
		-talk to database
	- controllers
		-connects models to views
		-requests information from models and serves to views
		-handles request parameters
	- views
		-templates, show to user

Build basic template with hello world

Expand to take in a name parameter and display as string

make a view/template to show name


get "/:name" do
	@name = params[:name] # why is this a instance variable?  Class (self) is controller
end

Introduce views

get "/:name" do
	@ame = params[:name]
	erb :index
end

will trigger path error
Connect SQL to HTTP methods to CRUD
Introduce REST
	-REpresentational State Transfer
		- Get
		- Post
		- Patch/Delete/Put tb discussed later

--end of lecture

-- review REST on day 2

Show how this works in the controller

		get "/books" do
			Book.all.map do |book|
			# build this and make it messy
				"<p>#{book.title}</p>". 
			end
		end

		get "/books/:id" do
			Book.find(params[:id]).title
		end






