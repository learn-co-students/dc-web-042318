class ApplicationController < Sinatra::Base

	set :views, "app/views"

	get "/" do
		erb :hello
	end

	get "/name/:name" do 
		@name = params[:name]
		person = Person.find_by(name=name)
		@person = person
		erb :hello
	end

end
