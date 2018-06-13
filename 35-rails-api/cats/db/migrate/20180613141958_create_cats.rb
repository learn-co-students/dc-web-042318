class CreateCats < ActiveRecord::Migration[5.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :quote
      t.integer :age

      t.timestamps
    end
  end
end
