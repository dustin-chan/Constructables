# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Step.destroy_all

User.create(username: 'Arcturus', email: 'info@arcturus.com', password: 'password')
User.create(username: 'Beta Pegasi', email: 'info@betapegasi.com', password: 'password')
User.create(username: 'Denebola', email: 'info@denebola.com', password: 'password')
User.create(username: 'Epsilon Sagittarii', email: 'info@epsilonsagittarii.com', password: 'password')
User.create(username: 'Fomalhaut', email: 'info@fomalhaut.com', password: 'password')
User.create(username: 'Gamma Crucis', email: 'info@gammacrucis.com', password: 'password')
User.create(username: 'Iota Draconis', email: 'info@iotadraconis.com', password: 'password')
User.create(username: 'Proxima Centauri', email: 'info@proximacentauri.com', password: 'password')
User.create(username: 'Vega', email: 'info@vega.com', password: 'password')

User.create!(username: 'Guest', email: 'info@guest.com', password: 'password')



Project.create(user_id: User.first.id, title: "a", featured: true, category: "a", description: "a",
  steps_attributes: [{body: "a"}, {body: "a"}, {body: "a"}, {body: "a"}, {body: "a"}])

Project.create(user_id: User.second.id, title: "b", featured: true, category: "b", description: "b",
  steps_attributes: [{body: "b"}, {body: "b"}, {body: "b"}, {body: "b"}, {body: "b"}])

Project.create(user_id: User.third.id, title: "c", featured: true, category: "c", description: "c",
  steps_attributes: [{body: "c"}, {body: "c"}, {body: "c"}, {body: "c"}, {body: "c"}])

Project.create(user_id: User.fourth.id, title: "d", featured: true, category: "d", description: "d",
  steps_attributes: [{body: "d"}, {body: "d"}, {body: "d"}, {body: "d"}, {body: "d"}])

Project.create(user_id: User.fifth.id, title: "e", featured: true, category: "e", description: "e",
  steps_attributes: [{body: "e"}, {body: "e"}, {body: "e"}, {body: "e"}, {body: "e"}])

Project.create(user_id: User.first.id, title: "f", featured: true, category: "f", description: "f",
  steps_attributes: [{body: "f"}, {body: "f"}, {body: "f"}, {body: "f"}, {body: "f"}])

Project.create(user_id: User.third.id, title: "g", featured: true, category: "g", description: "g",
  steps_attributes: [{body: "g"}, {body: "g"}, {body: "g"}, {body: "g"}, {body: "g"}])

Project.create(user_id: User.fourth.id, title: "h", featured: true, category: "h", description: "h",
  steps_attributes: [{body: "h"}, {body: "h"}, {body: "h"}, {body: "h"}, {body: "h"}])

Project.create(user_id: User.second.id, title: "i", featured: true, category: "i", description: "i",
  steps_attributes: [{body: "i"}, {body: "i"}, {body: "i"}, {body: "i"}, {body: "i"}])
