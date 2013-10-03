class FavoritesController < ApplicationController
  respond_to :json

  def index
    #@favorites = Favorite.find
  end

  def create
    @favorite =  Favorite.new(params[:favorite])
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite =  Favorite.find_by_gist_id(params[:gist_id])
    if @favorite.destroy
      render json: @favorite
    else
      render json: params
    end
  end
end
