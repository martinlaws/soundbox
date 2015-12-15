class Api::TracksController < ApplicationController

  before_action :require_user

  def index

  end

  def show
    render json: @track
  end

  def new
    @track = Track.new
  end

  def edit
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    @track.box_id = @track.box_id || -1
    if @track.save
      render json: @track
    else
      render json: @track.errors
    end
  end

  def destroy
    @track.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

    def track_params
      params.require(:track).permit(:username, :url, :title, :artist, :box_id)
    end

end
