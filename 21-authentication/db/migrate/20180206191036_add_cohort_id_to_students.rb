class AddCohortIdToStudents < ActiveRecord::Migration[5.1]
  def change
    add_column :students, :cohort_id, :integer
  end
end
