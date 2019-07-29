class Event < ApplicationRecord
  belongs_to :user
  # rubocop: disable Rails/HasAndBelongsToMany
  has_and_belongs_to_many :players
  # rubocop: enable Rails/HasAndBelongsToMany
  validates :opponent, :event_date, presence: true
end
