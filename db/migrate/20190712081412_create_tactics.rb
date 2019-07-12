class CreateTactics < ActiveRecord::Migration[5.2]
  has_many :players
  def change
    create_table :tactics, :id => false do |t|
      t.integer :id 
      t.string :name
      t.string :img
    end
  end
end
