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

User.create(email: "admin@email.com", password: "123456")

p "#{User.count} user(s) created"

korean = Category.create(category_name: "Korean")
indian = Category.create(category_name: "Indian")
mexican = Category.create(category_name: "Mexican")
greek = Category.create(category_name: "Greek")
italian = Category.create(category_name: "Italian")
american = Category.create(category_name: "American")
japanese = Category.create(category_name: "Japanese")
desserts = Category.create(category_name: "Desserts")
fast_food = Category.create(category_name: "Fast Food")
vegan = Category.create(category_name: "Vegan")



p "#{Category.count} categories created"


