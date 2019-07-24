class Event < ApplicationRecord
    belongs_to :user
    has_and_belongs_to_many :players
    enum event_type: [:league_match, :championship_match, :training, :exhibition]
    validates :opponent, :event_date, :event_type, presence: true
end
