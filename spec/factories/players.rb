FactoryBot.define do
    factory :player do
        name {Faker::Games::LeagueOfLegends.champion}
        surname {Faker::Games::Pokemon.name}
        bith_date {Faker::Date.between(50.years.ago, 15.years.ago)}
        trained_in_club {true}
        trained_in_country {true}
        european {true}
        red_cards {0}
        yellow_cards {0}
        end_of_contusion {nil}
    end
end