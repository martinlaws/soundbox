class BoxesController < ApplicationController

  before_action :require_user

  def new
    @box = Box.new
  end

  def create
    @box = Box.new(box_params)
  end

  def show
    @box = Box.find(params[:id])
    render :'/boxes/show'
  end

  def inbox
    @box = Track.where(username: @current_user.username, box_id: -1)
    @boxes = Box.where(user_id: @current_user.id )
    render :'/boxes/inbox'
  end

  def move
    @track = Track.find(params[:track_id])
    @new_box = Box.find(params[:box_id])
    @track.box_id = @new_box.id
    @track.save
    redirect_to "/users/#{@current_user.id}/boxes/inbox"
  end

  def inbox_track_destroy
    @track = Track.find(params[:id])
    if @track.destroy
      flash[:notice] = "The track has been deleted!"
    else
      flash[:error] = "The track wasn't able to be deleted!"
    end
    redirect_to :back
  end

  private

  def box_params
    params.require(:box).permit(:username, :url, :box_id)
  end

end
