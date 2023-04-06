class AddUsernameAndPasswordToPlayer < ActiveRecord::Migration[7.0]
  def change
    add_column :players, :username, :string
    add_column :players, :password_digest, :string
  end
end
