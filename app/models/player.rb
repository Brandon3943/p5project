class Player < ApplicationRecord
    has_secure_password
    
    has_many :matches
    has_many :games, through: :matches

    has_many :decks
    has_many :cards, through: :decks
end
