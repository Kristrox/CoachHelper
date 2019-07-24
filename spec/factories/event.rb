FactoryBot.define do
    factory :event do
        opponent { Faker::Games::LeagueOfLegends.champion }
        event_date {Faker::Date.between(50.years.ago, 15.years.ago) } 
    end
end
