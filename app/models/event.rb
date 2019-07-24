class Event < ApplicationRecord
  enum event_type: %i[league_match championship_match training exhibition]
  validates :opponent, :event_date, :event_type, presence: true
end
