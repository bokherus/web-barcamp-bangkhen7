class AddCodeIndexToUsers < ActiveRecord::Migration[5.0]
  def change
    add_index(:users, :code)
  end
end
