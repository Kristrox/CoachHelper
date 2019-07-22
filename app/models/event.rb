class Event < ApplicationRecord
    enum event_type: [:league_match, :championship_match, :exhibition]
    validates :opponent, :event_date, :event_type, presence: true
end
