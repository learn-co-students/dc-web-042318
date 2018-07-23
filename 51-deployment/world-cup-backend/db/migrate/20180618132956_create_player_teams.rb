class CreatePlayerTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :player_teams do |t|
      t.integer :player_id
      t.integer :team_id
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
