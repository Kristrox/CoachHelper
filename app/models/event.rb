class Event < ApplicationRecord
    belongs_to :user
    enum event_type: [:league_match, :championship_match, :training, :exhibition]
    validates :opponent, :event_date, :event_type, presence: true
end
