class ApplicationController < Sinatra::Base

  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

end
