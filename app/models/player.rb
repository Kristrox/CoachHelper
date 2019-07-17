class Player < ApplicationRecord
    enum trained_in: [:club, :country, :europe, :world]

    validates :name, :surname, :birth_date, :trained_in, presence: true
    validates :red_cards, :yellow_cards, numericality: {only_inteager: true}
    validates :red_cards, numericality: {less_than_or_equal_to: 1, greater_than_or_equal_to: 0}
    validates :yellow_cards, numericality: {less_than_or_equal_to: 4, greater_than_or_equal_to: 0} 
    validate :expiration_date_cannot_be_in_the_past, on: :update

    before_create :default_yellow_cards, :default_red_cards, :default_end_of_contusion

    def expiration_date_cannot_be_in_the_past
        if end_of_contusion == Date.today
          errors.add(:expiration_date, "contusion can't be in the past")
        end
    end

    def default_yellow_cards
        self.yellow_cards = 0
    end

    def default_red_cards
        self.red_cards = 0
    end

    def default_end_of_contusion
        self.end_of_contusion = nil
    end

end