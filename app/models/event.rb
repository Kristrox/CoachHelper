class Event < ApplicationRecord
  belongs_to :user
  has_many :players, through: :users
  validates :opponent, :event_date, presence: true
end
