class Event < ApplicationRecord
  belongs_to :user
  # rubocop: disable Rails/HasAndBelongsToMany
  has_and_belongs_to_many :players
  has_and_belongs_to_many :play_books
  # rubocop: enable Rails/HasAndBelongsToMany
  validates :opponent, :event_date, presence: true
  validates :opponent, format: { with: /\A[^0-9`!@#\$%\^&*+_=?]+\z/, message: 'only allows letters' }
end
