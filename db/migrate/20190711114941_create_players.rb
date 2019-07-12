class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do  |player|
            player.text :name
            player.text :surname
            player.text :bith_date
            player.boolean :trained_in_club
            player.boolean :trained_in_country
            player.boolean :European
            player.boolean :contusion
            player.number :red_cards
            player.number :yellow_cards

            player.timestamps null:false

    end
  end
end
