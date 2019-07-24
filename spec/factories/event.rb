FactoryBot.define do
    enum = [:league_match, :championship_match, :training, :exhibition]
    factory :event do
        opponent { Faker::Games::LeagueOfLegends.champion }
        event_date {Faker::Date.between(50.years.ago, 15.years.ago) }
        event_type {enum[Faker::Number.between(0, 3)] } 
    end
end
