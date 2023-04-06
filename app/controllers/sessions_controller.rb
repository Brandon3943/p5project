class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def create
        player = Player.find_by(username: params[:username])
        if player&.authenticate(params[:password])
            session[:player_id] = player.id
            render json: player, status: :created
        else
            render json: {errors: ["Username or Password invalid"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :player_id
        head :no_content
    end

end
