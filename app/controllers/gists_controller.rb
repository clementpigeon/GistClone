class GistsController < ApplicationController
  respond_to :json

  def index
    @gists = Gist.find_all_by_user_id(current_user.id)
    render json: @gists.to_json(include: [:favorites, :gist_files])
  end


  def create
     begin
       ActiveRecord::Base.transaction do
         p 'here'
         p current_user.id
         p params[:gist][:title]
          @gist = Gist.new(title: params[:gist][:title], user_id: current_user.id)

          p 'not here'
          @gist_files = params[:gist][:gist_files_attributes].map do |gist_file|
            GistFile.new(gist_file)
          end

         @gist_files.reject! { |file| file.name.empty? }

         @gist.save

         @gist_files.each do |gist_file|
           gist_file.gist_id = @gist.id
           gist_file.save
         end

         raise "invalid" unless @gist.valid? && @gist_files.all? { |gist_file| gist_file.valid? }
       end

     rescue
       render json: @gist.errors.full_messages, status: 422
     else
       render json: @gist
     end
   end



  # def create
  #   @gist = Gist.new(params[:gist])
  #
  #
  #   if @gist.save
  #     render json: @gist
  #   else
  #     render json: @gist.errors.full_messages, status: 422
  #   end
  # end

  def destroy
  end

end
