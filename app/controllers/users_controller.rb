class UsersController < ApplicationController
  before_action :require_user

  def show
    @user = User.find(params[:id])
    render :'/users/show'
  end

  def new
    @user = User.new
    render :'/users/new'
  end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        session[:user_id] = @user.id
      else
        # Add in an Else
      end
    end

  end

  def destroy
    @user.destroy
  end

end
