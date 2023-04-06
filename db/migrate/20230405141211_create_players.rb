class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :life_points
      t.string :image_url
      t.string :catch_phares

      t.timestamps
    end
  end
end
