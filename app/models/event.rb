class Event < ApplicationRecord
  belongs_to :user
  #has_many :players, through: :users
  has_and_belongs_to_many :players
  validates :opponent, :event_date, presence: true
end
