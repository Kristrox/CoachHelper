class EventsController < ApplicationController
  before_action :authenticate_user!

  def new
    @event = Event.new
  end
  
  def index
    @events = Event.all.order(:event_date)
    @players = Player.where(user_id: current_user.id)
  end

  def edit
    @event = Event.find(params[:id])
  end

  def add_player
    @event = Event.find(params[:id])
    @player = Player.find(params[:player_id])
    @event.players << @player
    if @event.save
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      redirect_to events_path, alert: 'Player has not been updated!'
    end
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
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to events_path, notice: 'Event was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:opponent, :event_date)
  end
end