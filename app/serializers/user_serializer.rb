class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest

  has_one :cart
end
