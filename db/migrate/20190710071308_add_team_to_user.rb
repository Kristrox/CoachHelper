class AddTeamToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :team, :string, default: "", null: false
  end
end
