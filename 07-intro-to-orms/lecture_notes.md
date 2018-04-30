- Go through objectives

- Review CRUD

- Can enter sql from sqlite3 prompt
```CREATE TABLE IF NOT EXISTS fans(id INTEGER PRIMARY KEY, artistId INTEGER);
```
or can put it in a file and execute with 
```.read {filename}```

- Communicate between Ruby and SQL
	-start a pry
	```
	sql = "CREATE TABLE IF NOT EXISTS fans(id INTEGER PRIMARY KEY, artistId INTEGER);"
	db.execute(sql)
	```
	won't work because we are not connected to database
	- need a Ruby gem to handle communication
		- google `connect ruby to sqlite3 gem` and walk through how to get it installed
		- `gem install sqlite3`
		- `require 'sqlite3'`
		- `require_relative 'environment.rb'`
	- now have access to module SQLite3
	- ls SQLite3
	- SQLite3::Database.new('chinook.db')
	- db = _
	- put this in environment.rb


sqlite3 chinook.db

.schema artists 
	-show artistId and name

build corresponding Artist#initialize method
	-name is accessor
	-id is reader, default value of nil

SQL all method returns an array of arrays, not objects.  Iterate over to create Artist objects

Change attribute of object; it doesn't change in database.  Write #save

```
  def save
    if id.nil?
      # create
      sql = "INSERT INTO artists(name) VALUES (?)"
      DB.execute(sql, @name)
      @id = DB.last_insert_row_id
      self
    else 
      # update
      sql = "UPDATE artists SET name = ? WHERE artistId = ?"
      DB.execute(sql, @name, @id)
      self
    end
  end
```

