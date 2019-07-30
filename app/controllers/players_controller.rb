class PlayersController < ApplicationController
  before_action :authenticate_user!

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
      redirect_to players_path
    else
      render 'new'
    end
  end

  def edit
    @player = Player.find(params[:id])
  end

  def destroy
    @player = Player.find(params[:id])
    @player.destroy
    redirect_to players_url, notice: 'Post was successfully destroyed.'
  end

  def update
    @player = Player.find(params[:id])
    if @player.update(player_params)
      redirect_to players_path, notice: 'Player was successfully updated.'
    else
      redirect_to players_path, alert: 'Player has not been updated!'
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :surname, :number, :birth_date, :trained_in, :red_cards)
  end
end
