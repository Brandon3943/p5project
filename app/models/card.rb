class Card < ApplicationRecord
    has_many :decks
    has_many :players, through: :decks
end
