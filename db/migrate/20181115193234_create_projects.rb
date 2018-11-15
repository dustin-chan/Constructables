class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.boolean :featured, null: false, default: false
      t.string :category, null: false
      t.string :image_url, null: false
      t.string :description, null: false

      t.timestamps
    end
    add_index :projects, :image_url
    add_index :projects, :user_id
  end
end
