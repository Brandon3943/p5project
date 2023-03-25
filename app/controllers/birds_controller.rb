class BirdsController < ApplicationController

    def index
        render json: Bird.all, status: :ok
    end

    def show
        render json: Bird.find(params[:id]), status: :ok
    end
end
