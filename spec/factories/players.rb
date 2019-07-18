FactoryBot.define do
    factory :player do
        name { Faker::Games::LeagueOfLegends.champion }
        surname { Faker::Games::Pokemon.name }
        number { Faker::Number.between(10, 80) }
        birth_date {Faker::Date.between(50.years.ago, 15.years.ago) }
        trained_in {Faker::Number.between(0, 3) } 
        red_cards {0}
        yellow_cards {0}
    end
end

# FactoryBot.define do
#     factory :author do
#       name { Faker::Name.first_name }
#       surname { Faker::Name.last_name }
#       age { Faker::Number.between(10, 80) }
#     end
#   end

# create_table "players", force: :cascade do |t|
#     t.string "name", null: false
#     t.string "surname", null: false
#     t.integer "number", null: false
#     t.datetime "birth_date", null: false
#     t.integer "red_cards", default: 0, null: false
#     t.integer "yellow_cards", default: 0, null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.bigint "user_id"
#     t.integer "trained_in"
#     t.index ["user_id"], name: "index_players_on_user_id"
#   end