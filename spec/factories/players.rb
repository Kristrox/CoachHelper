FactoryBot.define do
    enum = [:club, :country, :europe, :world]
    factory :player do
        name { Faker::Games::LeagueOfLegends.champion }
        surname { Faker::Games::Pokemon.name }
        number { Faker::Number.between(10, 80) }
        birth_date {Faker::Date.between(50.years.ago, 15.years.ago) }
        trained_in {enum[Faker::Number.between(0, 3)] } 
        red_cards {0}
        yellow_cards {0}
    end
end