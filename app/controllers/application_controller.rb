class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    before_action :authorized_user

    

    def current_user
      Player.find_by(id: session[:player_id])
    end
    
    def authorized_user
      render json: {errors: ["Please login"]}, status: :unauthorized unless current_user
    end





    private

    def record_not_found err
      render json: {error: [err.message]}, status: :not_found
    end

    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
