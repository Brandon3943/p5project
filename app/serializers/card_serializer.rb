class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :atk, :def, :level, :card_type, :desc, :image_url
end
