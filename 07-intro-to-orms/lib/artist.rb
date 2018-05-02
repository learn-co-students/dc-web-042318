class Artist

  attr_accessor :name
  attr_reader :id

  def initialize(name, id=nil)
    @name = name
    @id = id
  end

  def self.all
    # sql = "SELECT * FROM artists"
    sql = <<-SQL 
      SELECT * FROM artists
    SQL
    artist_list = DB.execute(sql)
    artist_objects = artist_list.map do |row|
      create_artist_object_from_row(row)
    end
  end

  # what arguments should .find take?
  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists
      WHERE artistId = ?
    SQL
    row = DB.execute(sql, id)
    row = row.first
    create_artist_object_from_row(row)
  end

  def self.find_by_name(name)

  end

  def self.create_artist_object_from_row(row)
    Artist.new(row[1], row[0])
  end

  # def self.where
  # end

  # def self.find_or_create
  # end

  def save
    if id.nil?
      sql = "INSERT INTO artists(name) VALUES (?)"
      DB.execute(sql, self.name)
      sql = "SELECT last_insert_rowid()"
      @id = DB.execute(sql)[0][0]
    else
      sql = "UPDATE artists set name = ? WHERE artistId = ?"
      DB.execute(sql, self.name, self.id)
    end
  end

  def self.create(name)
    new_artist = Artist.new(name)
    new_artist.save
  end

  def destroy
    sql = "DELETE FROM artists WHERE artistId = ?"
    DB.execute(sql, self.id)
  end
end