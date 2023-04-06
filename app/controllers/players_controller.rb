class PlayersController < ApplicationController

    def index
        render json: Player.all, status: :ok
    end
    
end
