class Events::PlayersController < ApplicationController
  def assign
    @event = Event.find(params[:event_id])
    @player = Player.find(params[:id])
    @event.players << @player
    if @event.save
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      redirect_to events_path, alert: 'Event has not been updated!'
    end
  end

  def update
    @player = Player.find(params[:id])
    yellow = params[:player][:yellow_cards]
    @player.update(yellow_cards: (@player.yellow_cards + 1)) if yellow.to_i == 1
    if @player.update(player_params)
      redirect_to events_path, notice: 'Player was successfully updated.'
    else
      redirect_to events_path, alert: 'Player has not been updated!'
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :surname, :number, :birth_date, :trained_in, :red_cards)
  end
end
