class AddIndexToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :user_id, :bigint, index: true
    add_index :events, :user_id
  end
end
