class CreateInjuries < ActiveRecord::Migration[5.2]
  def change
    create_table :injuries do |t|
      t.references :player , foreign_key: true
      t.text :description , null: false, default: ""
      t.datetime :final_date , null: false
      t.timestamps null: false
    end
  end
end
