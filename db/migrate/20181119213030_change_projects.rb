class ChangeProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :title, :string
    remove_column :projects, :image_url
    remove_column :users, :image_url
  end
end
