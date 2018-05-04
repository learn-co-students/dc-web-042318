# class BackupArtist
#   attr_accessor :name
#   attr_reader :id

#   def initialize(name:, id: nil)
#     @name = name
#     @id = id
#   end

#   def self.all
#     DB.execute("SELECT * FROM artists").map do |result|
#       new_from_db(result)
#     end
#   end

#   def save
#     if @id.nil? # Not Persisted
#       sql = "INSERT INTO artists(name) VALUES (?)"
#       DB.execute(sql, @name)
#       @id = DB.last_insert_row_id
#       self
#     else
#       # Has been persisted
#       sql = <<-SQL
#         UPDATE artists
#         SET name = ?
#         WHERE artistId = ?
#       SQL
#       DB.execute(sql, @name, @id)
#       self
#     end
#   end

#   def destroy
#     if @id
#       sql = "DELETE FROM artists WHERE artistId = ?"
#       DB.execute(sql, @id)
#     else
#       puts "Already has no id, not in the database"
#     end
#   end

#   def self.find(id)
#     # get back an Artist
#     sql = <<-SQL
#       SELECT * FROM artists
#       WHERE artistId = ?
#     SQL
#     arr = DB.execute(sql, id)
#     # [[280, "Rob"]]
#     new_from_db(arr.first)
#   end

#   def self.new_from_db(row) # row from the database, [artistId, name]
#     Artist.new(name: row[1], id: row[0])
#   end

#   # create a new instance AND save it to the database
#   def self.create(name:)
#     Artist.new(name: name).save
#   end

#   def self.find_by_name(name)
#     sql = <<-SQL
#     SELECT * FROM artists
#     WHERE name = ?
#     SQL
#     arr = DB.execute(sql, name)
#     row = arr.first
#     if row
#       new_from_db(row)
#     else
#       nil
#     end
#   end

#   # Check if (a matching artist row) exists
#   # If so, return an instance of Artist from the row
#   # If not, create a new instance and row
#   def self.find_or_create_by_name(name)
#     #
#     self.find_by_name(name) || self.create(name: name)
#     # result ? result : self.create(name: name)
#     # ternary
#   end

#   def self.where
#   end
# end
