class RenameBithDateColumnInPlyers < ActiveRecord::Migration[5.2]
  def change
    rename_column :players, :bith_date, :birth_date
  end
end
