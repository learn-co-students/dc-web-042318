class ApplicationController < Sinatra::Base

	set :views, "app/views"

	get "/" do
		erb :hello
	end

	get "/:name" do
		@name = params[:name]
		erb :hello
	end

end
