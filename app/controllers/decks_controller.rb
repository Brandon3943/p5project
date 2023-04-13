class DecksController < ApplicationController

    def index
        render json: Deck.all, status: :ok
    end

    def create
        deck = Deck.create!(deck_params)
        render json: deck, status: :created
    end

    def show
        render json: Deck.find(session[:player_id]), status: :ok
    end

    def destroy
        deck = Deck.find_by(player_id: params[:player_id], card_id: params[:id])
        deck.destroy
        head :no_content
    end

    



    private

    def deck_params
        params.permit(:player_id, :card_id)
    end

end
