require 'sqlite3'

# setting up the database connection
DB = SQLite3::Database.new("chinook.db")
