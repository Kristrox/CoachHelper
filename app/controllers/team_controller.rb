# class TeamController < ApplicationController

#   def index
#     @players = Player.all
#   end

#   def new
#     @player = Player.new
#   end

#   def create 
#     @player = Player.new(player_params) 
#     @player.red_cards = 0
#     @player.yellow_cards = 0
#     if @player.save 
#       redirect_to '/team' 
#     else 
#       render 'new' 
#     end 
#   end 

#   def edit
#     @player = Player.find(params[:id])
#   end

#   def destroy
#     @player = Player.find(params[:id])
#     @player.destroy
#     respond_to do |format|
#       format.html { redirect_to team_index_url, notice: 'Post was successfully destroyed.' }
#       format.json { head :no_content }
#     end
#   end

#   def update
#     @player = Player.find(params[:id])
#     respond_to do |format|
#       if @player.update(player_params)
#         format.html { redirect_to team_index_url, notice: 'Post was successfully updated.' }
#         format.json { render :show, status: :ok, location: @post }
#       else
#         format.html { render :edit }
#         format.json { render json: @player.errors, status: :unprocessable_entity }
#       end
#     end
#   end

#   private
#     def set_player
#       @player = Player.find(params[:id])
#     end

#     def player_params
#       params.require(:player).permit(:name, :surname, :bith_date, :trained_in_club, :trained_in_country, :european, :red_cards, :yellow_cards)
#     end
# end