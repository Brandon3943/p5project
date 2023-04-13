class CardsController < ApplicationController

    def index
        render json: Card.all, status: :ok
    end

    def show
        render json: Card.find(params[:id]), status: :ok
    end

    def current_deck
      if session[:player_id]
          player = Player.find(session[:player_id])
          card = player.cards
          render json: card, status: :ok
      end
    end
end
