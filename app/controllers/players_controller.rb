class PlayersController < ApplicationController

  def index
    @players = Player.all.order(:number)
  end

  def new
    @player = Player.new
  end

  def create 
    @player = Player.new(player_params) 
    @player.red_cards = 0
    @player.yellow_cards = 0
    @player.user = current_user
    if @player.save 
      redirect_to '/players' 
    else 
      render 'new' 
    end 
  end 

  def edit
    @player = Player.find(params[:id])
  end

  def editAfterMatch
    @player = Player.find(params[:id])
  end

  def destroy
    @player = Player.find(params[:id])
    @player.destroy
    respond_to do |format|
      format.html { redirect_to players_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def update
    @player = Player.find(params[:id])
    respond_to do |format|
      if @player.update(player_params)
        format.html { redirect_to players_url, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_player
      @player = Player.find(params[:id])
    end

    def player_params
      params.require(:player).permit(:name, :surname, :number, :birth_date, :trained_in, :red_cards, :yellow_cards)
    end
end
