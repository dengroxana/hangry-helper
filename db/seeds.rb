# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "admin@email.com", password: "123456")

p "#{User.count} user(s) created"

korean = Category.create(category_name: "Korean")
indian = Category.create(category_name: "Indian")
mexican = Category.create(category_name: "Mexican")


p "#{Category.count} categories created"


