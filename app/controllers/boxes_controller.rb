class BoxesController < ApplicationController
  def show
    @box = Box.find(params[:id])
    render :'/boxes/show'
  end

  def inbox
    @box = Track.where(username: current_user.username, box_id: -1)
    render :'/boxes/inbox'
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
end
