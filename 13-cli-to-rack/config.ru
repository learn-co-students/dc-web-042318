require_relative './config/environment.rb'

class App

  def call(env)
    # To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
    req = Rack::Request.new(env)
    resp = Rack::Response.new

    if req.path == '/'
      resp.write('Welcome to the Library Searcher')
    elsif req.path == '/books'
      Book.all.each do |book|
        resp.write("<p style='color:blue'>#{book.title}</p>")
      end
    else
      resp.write("Not found")
      resp.status=('404')
    end

    resp.finish
    # at the bare minimum the response should be formatted like this
    # [404, {'Content-Type' => 'text/html'}, ['niky built a thing']]
  end
end


run App.new
