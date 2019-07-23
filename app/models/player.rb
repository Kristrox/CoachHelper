class Player < ApplicationRecord
  has_many :injuries, dependent: :destroy
  belongs_to :user
  enum trained_in: [:club, :country, :europe, :world] 
  enum cards_quantity: [:zero, :one] 
  validates :name, :surname, :bith_date, :trained_in, presence: true
  validates :red_cards, :yellow_cards, numericality: {only_inteager: true}
  validates :red_cards, numericality: { less_than_or_equal_to: 1, greater_than_or_equal_to: 0, only_integer: true }
  validates :yellow_cards, numericality: { less_than_or_equal_to: 4, greater_than_or_equal_to: 0, only_integer: true }
  validates :number, :inclusion => 1..99, numericality: {only_inteager: true}
    # validate :expiration_date_cannot_be_in_the_past, on: :update
  validates_uniqueness_of :number
end
