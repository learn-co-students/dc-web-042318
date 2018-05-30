class AddUsernameToUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users
    add_column :users, :username, :string
  end
end
