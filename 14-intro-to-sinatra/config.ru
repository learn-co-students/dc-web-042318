require_relative './config/environment'

# set :root, File.join(File.dirname(__FILE__), '..')
set :views, Proc.new { File.join(root, "views") } 

run ApplicationController
