class Event < ApplicationRecord
  validates :opponent, :event_date, presence: true
end
