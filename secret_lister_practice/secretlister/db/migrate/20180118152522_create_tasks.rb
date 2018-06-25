class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :priority
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
