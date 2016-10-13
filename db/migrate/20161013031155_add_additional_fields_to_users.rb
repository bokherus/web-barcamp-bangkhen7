class AddAdditionalFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :shirt_size, :string
    add_column :users, :twitter, :string
    add_column :users, :website, :string
    add_column :users, :workplace, :string
  end
end
