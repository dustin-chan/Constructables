class ChangeSteps < ActiveRecord::Migration[5.2]
  def change
    add_column :steps, :photo_url, :string
  end
end
