class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :level
      t.string :type
      t.string :desc
      t.integer :atk
      t.integer :def
      t.string :image_url
      t.boolean :in_atk_mode

      t.timestamps
    end
  end
end
