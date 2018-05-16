class ApplicationController < Sinatra::Base

  set :method_override, true

  get '/' do
    "Hello World"
  end

end
