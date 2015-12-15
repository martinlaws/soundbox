class BoxesController < ApplicationController
  def show
    @box = Box.find(params[:id])
    render :'/boxes/show'
  end

  def inbox
    @box = Track.where(username: current_user.username, box_id: nil)
    render :'/boxes/inbox'
  end
end
