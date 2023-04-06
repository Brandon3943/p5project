class DeckSerializer < ActiveModel::Serializer
  attributes :id, :player_id, :card_id
end
