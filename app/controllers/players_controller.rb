class PlayersController < ApplicationController
  def index
    @players = current_user.players
  end

  def new
    @player = Player.new
  end

  def create
    @player = current_user.players.build(player_params)
    if @player.save
      redirect_to '/players'
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
    respond_to do |format|
      format.html { redirect_to players_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def update
    @player = Player.find(params[:id])
    update_params = player_params
    if update_params[:yellow_cards] && update_params[:yellow_cards] == '1'
      update_params[:yellow_cards] = @player.yellow_cards
      update_params = Player.suspend(update_params)
    end

    respond_to do |format|
      if @player.update(update_params)
        format.html { redirect_to players_url, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :surname, :number, :birth_date, :trained_in, :yellow_cards, :suspended)
  end
end
