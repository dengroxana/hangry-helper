# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Restaurant.destroy_all

admin = User.create(first_name: "John", last_name: "Smith", email: "admin@email.com", password: "123456")

p "#{User.count} user(s) created"

asian = Category.create(category_name: "Asian")
latin = Category.create(category_name: "Latin")
european = Category.create(category_name: "European")
american = Category.create(category_name: "American")
middle_eastern = Category.create(category_name: "Middle Eastern")
desserts = Category.create(category_name: "Desserts")

p "#{Category.count} categories created"

ichiran = Restaurant.create(restaurant_name: "Ichiran", price_range: "$$", location: "374 Johnson Ave Brooklyn, NY 11206", category: asian, user: admin)
up_thai = Restaurant.create(restaurant_name: "Up Thai", price_range: "$$", location: "1411 2nd Ave New York, NY 10021", category: asian, user: admin)
bocaphe = Restaurant.create(restaurant_name: "BoCaphe", price_range: "$$", location: "222 Lafayette St New York, NY 10012", category: asian, user: admin)

empanada_mama = Restaurant.create(restaurant_name: "Empanada Mama", price_range: "$", location: "95 Allen St New York, NY 10002", category: latin, user: admin)
cafe_habana = Restaurant.create(restaurant_name: "Cafe Habana", price_range: "$$", location: "17 Prince St New York, NY 10012", category: latin, user: admin)
calle_ocho = Restaurant.create(restaurant_name: "Calle Ocho", price_range: "$$", location: "2756 Broadway New York, NY 10025", category: latin, user: admin)

veselka = Restaurant.create(restaurant_name: "Veselka", price_range: "$$", location: "144 2nd Ave New York, NY 10003", category: european, user: admin)
cafe_katja = Restaurant.create(restaurant_name: "Cafe Katja", price_range: "$$", location: "79 Orchard St New York, NY 10002", category: european, user: admin)
aquavit = Restaurant.create(restaurant_name: "Aquavit", price_range: "$$$$", location: "65 E 55th St New York, NY 10022", category: european, user: admin)

jane = Restaurant.create(restaurant_name: "Jane", price_range: "$$", location: "100 W Houston St New York, NY 10012", category: american, user: admin)
the_smith = Restaurant.create(restaurant_name: "The Smith", price_range: "$$", location: "55 3rd Ave New York, NY 10003", category: american, user: admin)
friedmans = Restaurant.create(restaurant_name: "Friedman's", price_range: "$$", location: "132 W 31st St New York, NY 10001", category: american, user: admin)

cafe_mogador = Restaurant.create(restaurant_name: "Cafe Mogador", price_range: "$$", location: "101 St Marks Pl New York, NY 10009", category: middle_eastern, user: admin)
taboonette = Restaurant.create(restaurant_name: "Taboonette", price_range: "$$", location: "30 E 13th St New York, NY 10003", category: middle_eastern, user: admin)
tanoreen = Restaurant.create(restaurant_name: "Tanoreen", price_range: "$$", location: "7523 3rd Ave Brooklyn, NY 11209", category: middle_eastern, user: admin)

levain_bakery = Restaurant.create(restaurant_name: "Levain Bakery", price_range: "$$", location: "1484 3rd Ave New York, NY 10023", category: desserts, user: admin)
spot_dessert_bar = Restaurant.create(restaurant_name: "Spot Dessert Bar", price_range: "$$", location: "13 St Marks Pl New York, NY 10003", category: desserts, user: admin)
taiyaki_nyc = Restaurant.create(restaurant_name: "Taiyaki NYC", price_range: "$", location: "119 Baxter St New York, NY 10013", category: desserts, user: admin)

p "#{Restaurant.count} restaurants created"
