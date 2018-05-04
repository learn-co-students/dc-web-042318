class AddInstrumentToArtist < ActiveRecord::Migration[4.2]
  def change
  	add_column :artists, :instrument, :string
  end
end
