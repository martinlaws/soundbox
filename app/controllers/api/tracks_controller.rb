class Api::TracksController < ApplicationController
  before_action :get_client
  before_action :set_track, only: [:show, :edit, :update, :destroy]

  # GET /tracks
  # GET /tracks.json
  def index
    @tracks = @client.get('/tracks', :limit => 10, :order => 'hotness')
    if params
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
      puts @track.errors
    end

  end

  # PATCH/PUT /tracks/1
  # PATCH/PUT /tracks/1.json
  def update
    respond_to do |format|
      if @track.update(track_params)
        format.html { redirect_to @track, notice: 'Track was successfully updated.' }
        format.json { render :show, status: :ok, location: @track }
      else
        format.html { render :edit }
        format.json { render json: @track.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tracks/1
  # DELETE /tracks/1.json
  def destroy
    @track.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def get_client
      @client = Soundcloud.new(client_id: 'YOUR_CLIENT_ID') # current user?
    end

    def set_track
      @track = @client.get(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    # def track_params
    #   params.require(:track).permit(:url, :box)
    # end

    def track_params
      params.require(:track).permit(:url, :title, :artist, :box)
    end

    def query_params

    end
end
