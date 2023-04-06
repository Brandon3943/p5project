class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :catch_phares, :username

  has_many :cards
end
