class Player < ApplicationRecord
  has_many :injuries, dependent: :destroy
  belongs_to :user
  enum trained_in: %i[club country europe world]
  validates :name, :surname, :birth_date, :trained_in, presence: true
  validates :yellow_cards, numericality: { only_inteager: true }
  validates :yellow_cards, numericality: { less_than_or_equal_to: 4, greater_than_or_equal_to: 0, only_integer: true }
  validates :number, numericality: { less_than_or_equal_to: 99, greater_than_or_equal_to: 0, only_inteager: true }
  # validate :expiration_date_cannot_be_in_the_past, on: :update
  validates :number, uniqueness: true
end
