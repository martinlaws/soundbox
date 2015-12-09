# class SessionsController < ApplicationController
#   def new
#   end
#
#   def create
#     user = User.find_by(email: params[:email])
#
#     if user && user.authenticate(params[:password])
#       session[:user_id] = user.id
#     else
#       render :new
#     end
#   end
#
#   def destroy
#     session[:user_id] = nil
#   end
#
#   protected
#
#   # Use callbacks to share common setup or constraints between actions.
#   def set_user
#     @user = User.find(params[:id])
#   end
#
#   # Never trust parameters from the scary internet, only allow the white list through.
#   def user_params
#     params.require(:user).permit(:username)
#   end
#
# end
