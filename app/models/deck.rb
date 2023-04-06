class Deck < ApplicationRecord
  belongs_to :player
  belongs_to :card
end
