class Rating < ApplicationRecord
    has_many :events
    belongs_to :play_books
end