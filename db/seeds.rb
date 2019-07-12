# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.find_or_create_by(email: 'user@user.com', team: 'User Team') do |user|
    user.password = 'Haslo123.'
  end

player1= Player.create(name: "Adam", surname: "Nowak")

player2= Player.create(name: "Piotrek", surname:"Kowalski")