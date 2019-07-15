class AddNumberCoachAndInjuryToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :number, :integer, null: false, default: 0
    add_column :players, :coach_id, :integer, null: false, default: 0, index: true
  end
end
