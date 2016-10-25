class EditSessionsField < ActiveRecord::Migration[5.0]
  def change
    remove_column :sessions, :start_time
    remove_column :sessions, :end_time
    add_column :sessions, :start_time, :time
    add_column :sessions, :end_time, :time
  end
end
