class AddBadAlbumIdToSong < ActiveRecord::Migration[5.2]
  def change
  	add_column :songs, :album_foo, :integer
  end
end
