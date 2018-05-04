- Go over objectives

- Review artist-backup created earlier in the week

- What is Rake?
	- Helps to do tasks
	- For example `rake db:migrate`

- How do we get Rake?
	- need a gem
	- add to gem file
		- gem 'rake'
		- bundle install
			- some gems have dependencies, this handles them automatically

- Define tasks in Rakefile
	- rake -T
	- no Rakefile
	- Add Rakefile, rake -T will work but be empty
```desc 'Print Hello World'
task :hello do 
	puts "Hello World"
end```
	- rake -T
	- rake hello

get active record

connect to database
	- in environment file
	old way:
	```
	require 'sqlite3'
	require 'require_all'
	require_all 'lib'

	# setting up the database connection (old way)
	DB = SQLite3::Database.new("chinook.db")
	```

	new way:
	```
	ActiveRecord::Base.establish_connection({
	adapter: 'sqlite3',
	database: 'test.db', 
})
	```

Test.db doesn't exist, so what will happen?

desc "Runs a console"
task :console do
	require_relative "environment.rb"
	pry.start
end

ActiveRecord::Base.connection - shows some of the conneciton stuff.

ActiveRecord::Base
	- class within AR
	- used to establish connection
	- in labs used to access methods we've been writing in SQL

make a db folder and put dbs in there.  make sub directory migrate

Rake -T has not added any extra tasks as expected
http://api.rubyonrails.org/classes/ActiveRecord/Tasks/DatabaseTasks.html  

Gemfile
	gem 'activerecord'
	gem 'sinatra-activerecord'
[INCOMPLETE]

config/database.yml
	development:
	  adapter: sqlite3
	  database: db/development.sqlite3
	  pool: 5
	  timeout: 5000

config/environment.rb
	require 'bundler/setup'
	Bundler.require

	ActiveRecord::Base.establish_connection(
	  adapter: 'sqlite3',
	  database: "db/development.sqlite"
	)

	ActiveRecord::Base.logger = Logger.new(STDOUT)

	require_all 'lib'


Make a migration
	up/down vs change

```
class CreateArtists < ActiveRecord::Migration

	def change
		create_table :artists do |t|
			t.string :name
		end
	end

end
```

in rake console
	migration = CreateArtists.new
	ls migration to show some methods
	migration.change to execute

sqlite3 db/test.db
.tables
.schema artists

add a column
