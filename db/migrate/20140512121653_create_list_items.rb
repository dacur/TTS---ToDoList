class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.string :text

      t.timestamps
    end
  end
end
