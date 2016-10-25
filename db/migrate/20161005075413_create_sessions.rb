class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :sessions do |t|
      t.string :name
      t.string :speaker
      t.datetime :start_time
      t.datetime :end_time
      t.string :location
      t.timestamps
    end
  end
end
