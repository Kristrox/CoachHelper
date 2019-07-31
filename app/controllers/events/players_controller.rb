class Events::PlayersController < ApplicationController
  def assign
    @event = Event.find(params[:event_id])
    @player = Player.find(params[:id])
    if !@event.players.include?(@player)
      @event.players << @player
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      redirect_to events_path, alert: 'Event has not been updated!'
    end
  end

  def update
    @player = Player.find(params[:id])
    update_params = player_params
    if update_params[:yellow_cards] && update_params[:yellow_cards] == '1'
      update_params[:yellow_cards] = @player.yellow_cards
      update_params = Player.suspend(update_params)
    end
    @event = Event.find(params[:event_id])
    if @player.update(update_params)
      render 'events/update_modal'
    else
      render 'events/error'
    end
  end

  private

  def player_params
    params.require(:player).permit(:yellow_cards, :suspended, :injury)
  end
end
