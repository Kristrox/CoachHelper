class EventsController < ApplicationController
  before_action :authenticate_user!

  def new
    @event = Event.new
  end

  def index
    @events = Event.all.order(:event_date)
    @play_books = PlayBook.all
    @players = Player.where(user_id: current_user.id)
  end

  def edit
    @event = Event.find(params[:id])
  end

  def add_play_book
    @event = Event.find(params[:id])
    @play_book = PlayBook.find(params[:play_book_id])
    if @event.play_books << @play_book
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      redirect_to events_path, alert: 'Event has not been updated!'
    end
  end

  def add_player
    @event = Event.find(params[:id])
    @player = Player.find(params[:player_id])
    @event.players << @player
    if @event.save
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      redirect_to events_path, alert: 'Event has not been updated!'
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

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:opponent, :event_date)
  end
end
