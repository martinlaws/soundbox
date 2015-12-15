class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]

#     users   POST    /users(.:format)            users#create
#  new_user   GET     /users/new(.:format)        users#new
# edit_user   GET     /users/:id/edit(.:format)   users#edit
#      user   GET     /users/:id(.:format)        users#show
#             PATCH   /users/:id(.:format)        users#update
#             PUT     /users/:id(.:format)        users#update
#             DELETE  /users/:id(.:format)        users#destroy

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

  def update

  end

  def destroy
    @user.destroy
  end

end

# This is what used to exist here:
#
# class UsersController < ApplicationController
#   before_action :set_user, only: [:show, :edit, :update, :destroy]
#
#   def show
#     # render :'/users/:id/show'
#   end
#
#   # GET /user/new
#   def new
#     @user = User.new
#     render :'/users/new'
#   end
#
#   # GET /user/edit
#   def edit
#     @user = User.find(params[:id])
#   end
#
#   # POST /user
#   # POST /user.json
#   def create
#     respond_to do |format|
#       if @user.save
#         format.html { redirect_to @user, notice: 'User was successfully created.' }
#         format.json { render :show, status: :created, location: @user }
#         session[:user_id] = @user.id
#       else
#         format.html { render :new }
#         format.json { render json: @user.errors, status: :unprocessable_entity }
#       end
#     end
#   end
#   # PATCH/PUT /user/1
#   # PATCH/PUT /user/1.json
#   def update
#     respond_to do |format|
#       if @user.update(user_params)
#         format.html { redirect_to @user, notice: 'User was successfully updated.' }
#         format.json { render :show, status: :ok, location: @user }
#       else
#         format.html { render :edit }
#         format.json { render json: @user.errors, status: :unprocessable_entity }
#       end
#     end
#   end
#
#   # DELETE /user
#   # DELETE /user.json
#   def destroy
#     @user.destroy
#     respond_to do |format|
#       format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
#       format.json { head :no_content }
#     end
#   end
#
#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_user
#       @user = User.find(params[:id]) if params[:id]
#     end
#
#     # Never trust parameters from the scary internet, only allow the white list through.
#     def user_params
#       params.require(:user).permit(:username)
#     end
# end
