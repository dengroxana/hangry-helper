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

admin = User.create(email: "admin@email.com", password: "123456")

p "#{User.count} user(s) created"

asian = Category.create(category_name: "Asian")
latin = Category.create(category_name: "Latin")
european = Category.create(category_name: "European")
american = Category.create(category_name: "American")
middle_eastern = Category.create(category_name: "Middle Eastern")
desserts = Category.create(category_name: "Desserts")

p "#{Category.count} categories created"

ichiran = Restaurant.create(restaurant_name: "Ichiran", category: asian, user: admin)
up_thai = Restaurant.create(restaurant_name: "Up Thai", category: asian, user: admin)
bocaphe = Restaurant.create(restaurant_name: "BoCaphe", category: asian, user: admin)

empanada_mama = Restaurant.create(restaurant_name: "Empanada Mama", category: latin, user: admin)
cafe_habana = Restaurant.create(restaurant_name: "Cafe Habana", category: latin, user: admin)
calle_ocho = Restaurant.create(restaurant_name: "Calle Ocho", category: latin, user: admin)

veselka = Restaurant.create(restaurant_name: "Veselka", category: european, user: admin)
cafe_katja = Restaurant.create(restaurant_name: "Cafe Katja", category: european, user: admin)
aquavit = Restaurant.create(restaurant_name: "Aquavit", category: european, user: admin)

jane = Restaurant.create(restaurant_name: "Jane", category: american, user: admin)
the_smith = Restaurant.create(restaurant_name: "The Smith", category: american, user: admin)
friedmans = Restaurant.create(restaurant_name: "Friedman's", category: american, user: admin)

cafe_mogador = Restaurant.create(restaurant_name: "Cafe Mogador", category: middle_eastern, user: admin)
taboonette = Restaurant.create(restaurant_name: "Taboonette", category: middle_eastern, user:admin)
tanoreen = Restaurant.create(restaurant_name: "Tanoreen", category:middle_eastern, user:admin)

levain_bakery = Restaurant.create(restaurant_name: "Levain Bakery",category:desserts, user:admin )
spot_dessert_bar = Restaurant.create(restaurant_name: "Spot Dessert Bar", category:desserts, user:admin)
taiyaki_nyc = Restaurant.create(restaurant_name: "Taiyaki NYC",category:desserts, user:admin)

p "#{Restaurant.count} restaurants created"
