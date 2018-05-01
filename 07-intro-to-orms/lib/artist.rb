class Artist
  attr_accessor :name
  attr_reader :id

  def initialize(name, id=nil)
    @name = name
    @id = id
  end

  def self.create_table
  end

  def self.all
    sql = "SELECT * FROM artists"
    artist_arrays = DB.execute(sql)
    artists = artist_arrays.map do |result|
      make_artist_from_db(result)
    end
  end

  # what arguments should .find take?
  def self.find(id)
    sql = <<-SQL 
      SELECT * FROM artists
      WHERE artistId = ?
    SQL
    result = DB.execute(sql, id)
    if result.count >= 1
      result = result.first
      make_artist_from_db(result)
    else
      "No artist exists with that ID in the database"
    end
  end

  def self.find_by_name(name)
    sql = "SELECT * FROM artists WHERE name = ?"
    result = DB.execute(sql, name)
    if result.count >= 1
      make_artist_from_db(result.first)
    else
      puts "No artist with that name is in the database"
      nil
    end
  end


  def self.find_or_create(name)
    result = find_by_name(name)
    if result
      result
    else
      puts "Creating new artist with #{name}"
      create(name: name)
    end

  end

  def self.make_artist_from_db(row)
    Artist.new(row[1], row[0])
  end

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

  def self.create(name:)
    new_artist = Artist.new(name)
    new_artist.save
  end

  def destroy
    if id.nil?
      "This artist does not exist in the database"
    else
      sql = "DELETE FROM artists WHERE artistId = ?"
      DB.execute(sql, @id)
    end

  end
end