# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

Student.create(name: 'Meryl', email: 'meryl@meryl.com', dob: Date.parse('2017-11-16'))
Student.create(name: 'Alex', email: 'alex@alex.com', dob: Date.parse('2017-07-02'))
Student.create(name: 'Lindsey', email: 'lindsey@lindsey.com', dob: Date.parse('2017-11-16'))
