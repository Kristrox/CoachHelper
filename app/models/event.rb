class Event < ApplicationRecord
    enum type: [:league_match, :championship_match, :training, :exhibition]
    validates :opponent, :event_date, :type, presence: true
end
