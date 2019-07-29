class AddPlayBookToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :play_book, foreign_key: true
  end
end
