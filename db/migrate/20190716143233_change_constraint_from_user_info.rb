class ChangeConstraintFromUserInfo < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :trained_in_club, :boolean, null:false
    remove_column :players, :trained_in_country, :boolean, null:false
    remove_column :players, :european, :boolean, null:false
    add_column :players, :trained_in, :integer
  end
end
