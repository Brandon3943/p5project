class ApplicationController < ActionController::API

    def index
        render json: {hello: "world"}, status: :ok
    end

end
