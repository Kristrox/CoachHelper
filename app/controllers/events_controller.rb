class EventsController < ApplicationController
  before_action :authenticate_user!

  def index
    @events = current_user.events.order(:event_date)
    @event = Event.new
    @play_books = PlayBook.all
    @players = Player.where(user_id: current_user.id)
  end

  def edit
    @event = Event.find(params[:id])
  end

  def edit_player
    @event = Event.find(params[:id])
    @players = Player.all.order(:number)
  end

  def create
    @event = current_user.events.build(event_params)
    if @event.save
      redirect_to events_path
    else
      render 'new'
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    redirect_to events_url, notice: 'Event was successfully destroyed.'
  end

  def close
    event = Event.find(params[:id])
    players = Player.remove_players_suspension_after_match(event.players) 
    if event.update(closed_match: true, players: players)
      
      redirect_to events_path, notice: 'Player was successfully updated.'
    else
      redirect_to events_path, alert: 'Player has not been updated!'
    end
  end

  private

  def event_params
    params.require(:event).permit(:opponent, :event_date)
  end
end
