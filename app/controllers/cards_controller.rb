class CardsController < ApplicationController
skip_before_action :authorized_user
    def index
        render json: Card.all, status: :ok
    end

    def show
        render json: Card.find(params[:id]), status: :ok
    end

    def current_deck
          player = Player.find(session[:player_id])
          card = player.cards
          render json: card, status: :ok
    end
end
