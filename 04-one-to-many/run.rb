require_relative "./tweet.rb"
require_relative "./user.rb"
require "pry"

coffee_dad = User.new("Coffee Dad")

tweet1 = Tweet.new("love coffee", coffee_dad)
tweet2 = Tweet.new("need coffee", coffee_dad)
tweet3 = Tweet.new("want coffee", coffee_dad)
tweet4 = Tweet.new("Life is a meaningless void", coffee_dad)

binding.pry
puts "done"