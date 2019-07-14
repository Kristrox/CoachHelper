class TeamController < ApplicationController
  def new
    @player = Player.new
  end

  def index
    @players = Player.all
  end

  def create 
    @player = Player.new(player_params) 
    if @player.save 
      redirect_to '/player' 
    else 
      render 'new' 
    end 
  end 

  def destroy
    @player.destroy
    respond_to do |format|
      format.html { redirect_to players_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_player
      @player = Player.find(params[:id])
    end

    def player_params
      params.require(:player).permit(:name)
    end
end