class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.datetime :start_time
      t.integer :home_team_id
      t.integer :away_team_id
      t.integer :home_team_score
      t.integer :away_team_score

      t.timestamps
    end
  end
end
