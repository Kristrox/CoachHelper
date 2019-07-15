=begin
class PlayersController < ApplicationController
  def players
  end

  def new
    @player = Player.new
  end

  def index
    @players = Player.all
  end

  # POST /posts.json
  def create 
    @player = Player.new(player_params) 
    if @player.save 
      redirect_to '/player' 
    else 
      render 'new' 
    end 
  end 


  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @player.destroy
    respond_to do |format|
      format.html { redirect_to players_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def player_params
      params.require(:player).permit(:name, :surname, :bith_date, :trained_in_club, :trained_in_country, :European, :red_cards, :yellow_cards)
    end
end
=end