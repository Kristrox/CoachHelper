class Events::PlayBooksController < ApplicationController
  def update
    @event = Event.find(params[:event_id])
    @play_book = PlayBook.find(params[:id])
    if @event.play_books << @play_book
      redirect_to events_path, notice: 'Event was successfully updated.'
    else
      redirect_to events_path, alert: 'Event has not been updated!'
    end
  end
end
