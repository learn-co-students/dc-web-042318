class AddColumnGenreToArtist < ActiveRecord::Migration[4.2]

	def change
		add_column :artists, :genre, :string
	end

end
