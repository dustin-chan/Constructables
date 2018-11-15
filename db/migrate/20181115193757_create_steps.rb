class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.integer :project_id, null: false
      t.string :body

      t.timestamps
    end
    add_index :steps, :project_id
  end
end
