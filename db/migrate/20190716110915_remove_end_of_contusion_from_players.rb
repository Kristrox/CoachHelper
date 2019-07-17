class RemoveEndOfContusionFromPlayers < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :end_of_contusion, :datetime
  end
end
