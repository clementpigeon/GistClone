class GistsController < ApplicationController
  respond_to :json

  def index
    @gists = Gist.find_all_by_user_id(current_user.id)
    render json: @gists.to_json(include: :favorites)
  end

  def create
    @gist = Gist.new(params[:gist])
    if @gist.save
      render json: @gist
    else
      render json: @gist.errors.full_messages, status: 422
    end
  end

  def destroy
  end

end
