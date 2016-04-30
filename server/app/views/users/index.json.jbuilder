json.array!(@users) do |user|
  json.extract! user, :id, :name, :age, :birthday, :address, :email, :phone, :tel, :address
  json.url user_url(user, format: :json)
end
