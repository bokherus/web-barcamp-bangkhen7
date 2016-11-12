class CreateUserCheckin < ActiveRecord::Migration[5.0]
  def change
    create_table :user_checkins do |t|
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
