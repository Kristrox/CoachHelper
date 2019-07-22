class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :opponent
      t.datetime :event_date
      t.integer "type"
      t.timestamps
    end
  end
end
