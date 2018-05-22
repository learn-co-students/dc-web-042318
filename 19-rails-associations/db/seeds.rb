# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


retailers = Retailer.create([{name: "Hostess", year_established: 1929},
                             {name: "Girl Scouts", year_established: 1893}
])
snacks = Snack.create([{name: "Thin Mints", calories: 200, deliciousness: 6, retailer_id: 2},
                       {name: "Chicken fingers", calories: 650, deliciousness: 8, retailer_id: 1}])


