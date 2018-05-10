class CreateAlbumTable < ActiveRecord::Migration[5.2]
  def change
  	create_table :albums do |t|
  		t.string :name
  		t.integer :artist_id
  	end
  end
end
