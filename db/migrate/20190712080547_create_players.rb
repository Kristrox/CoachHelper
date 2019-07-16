class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name, null:false
      t.string :surname, null:false
      t.integer :number, null:false , unique: true
      t.datetime :bith_date, null:false
      t.integer :coach_id, null: false, unique: true
      t.boolean :trained_in_club, null:false
      t.boolean :trained_in_country, null:false
      t.boolean :european, null:false
      t.integer :red_cards, null:false, :default => 0
      t.integer :yellow_cards, null:false, :default => 0
      t.datetime :end_of_contusion
      t.timestamps null:false
    end
  end
end