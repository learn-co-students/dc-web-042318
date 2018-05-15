class ApplicationController < Sinatra::Base

  configure do
    set :views, 'app/views'
  end

  get '/' do
    erb :welcome
  end

end
