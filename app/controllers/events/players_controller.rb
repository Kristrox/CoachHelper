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
    @event = Event.find(params[:id])
    @player = Player.find(params[:id])

    update_params = player_params
    if update_params[:yellow_cards] && update_params[:yellow_cards] == '1'
      update_params[:yellow_cards] = @player.yellow_cards
      update_params = Player.suspend(update_params)
    end
    @event.closed_match = "true"
    if @player.update(update_params)
      redirect_to events_path, notice: 'Player was successfully updated.'
    else
      redirect_to events_path, alert: 'Player has not been updated!'
    end
  end

  private

  def player_params
    params.require(:player).permit(:yellow_cards, :suspended)
  end
  def event_params
    params.require(:event).permit(:closed_match)
  end
end
