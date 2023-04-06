class DecksController < ApplicationController

    def index
        render json: Deck.all, status: :ok
    end

    def create
        deck = Deck.create!(deck_params)
        render json: deck, status: :created
    end

    def destroy
        Deck.delete(params[:id])
        head :no_content
    end

    



    private

    def deck_params
        params.permit(:player_id, :card_id)
    end

end
