class Api::TracksController < ApplicationController
  before_action :get_client
  before_action :set_track, only: [:show, :edit, :update, :destroy]

  # GET /tracks
  # GET /tracks.json
  def index
    @tracks = @client.get('/tracks', :limit => 10, :order => 'hotness')
    if query_params
      @tracks = @client.get('/tracks', query_params)
    end
  end

  # GET /tracks/1
  # GET /tracks/1.json
  def show
    render json: @track
  end

  # GET /tracks/new
  def new
    @track = Track.new
  end

  # GET /tracks/1/edit
  def edit
    @track = Track.find(params[:id])
  end

  # POST /tracks
  # POST /tracks.json
  def create
    @track = Track.new(track_params)

    if @track.save
      render json: @track
    else
      render json: @track.errors
    end
  end

  # PATCH/PUT /tracks/1
  # PATCH/PUT /tracks/1.json
  def update
    if @track.update(track_params)
      render json: @track
    else
      render json: @track.errors
    end
  end

  # DELETE /tracks/1
  # DELETE /tracks/1.json
  def destroy
    @track.destroy
    head :no_content
  end

  private

    def get_client
      @client = Soundcloud.new(client_id: 'YOUR_CLIENT_ID') # current user?
    end

    def set_track
      @track = @client.get(params[:id])
    end

    def track_params
      params.require(:track).permit(:url, :title, :artist, :box)
    end

    def query_params

    end
end
