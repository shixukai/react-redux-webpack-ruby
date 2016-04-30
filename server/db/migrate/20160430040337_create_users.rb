class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.datetime :birthday
      t.string :address
      t.string :email
      t.string :phone
      t.string :tel
      t.string :address

      t.timestamps
    end
  end
end
