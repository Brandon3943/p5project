class CardsController < ApplicationController

    def index
        render json: Card.all, status: :ok
    end

end
