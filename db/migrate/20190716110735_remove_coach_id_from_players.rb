class RemoveCoachIdFromPlayers < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :coach_id, :integer
  end
end
