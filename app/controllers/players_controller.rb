class PlayersController < ApplicationController
   rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
   skip_before_action :authorized_user, only: [:create]

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







        private

        def record_invalid
            render json: {errors: error.record.full_messages}, status: :unprocessable_entity
        end


        def player_params
            params.permit(:name, :life_points, :image_url, :catch_phares, :username, :password)
        end
    
end
