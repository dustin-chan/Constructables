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
