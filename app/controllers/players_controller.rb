class PlayersController < ApplicationController
   skip_before_action :authorized_user, only: [:create, :update, :destroy]

    def index
        render json: Player.all, status: :ok
    end

    def show
        render json: Player.find(session[:player_id]), status: :ok
    end

    def create
        player = Player.create!(player_params)
        render json: player, status: :created
    end

    def update
        player = Player.find(params[:id])
        player.update!(player_params)
        render json: player, status: :ok
    end

    def destroy
        player = Player.find(params[:id])
        player.delete
        head :no_content
    end



        private


        def player_params
            params.permit(:name, :life_points, :image_url, :catch_phares, :username, :password)
        end
    
end
