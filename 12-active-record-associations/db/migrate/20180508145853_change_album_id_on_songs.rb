class ChangeAlbumIdOnSongs < ActiveRecord::Migration[5.2]
  def change
  	rename_column :songs, :album_foo, :album_id

  end
end
