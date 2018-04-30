require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./favorite.rb"
require "byebug"

coffee_dad = User.new("Coffee Dad")

tweet1 = Tweet.new("love coffee", coffee_dad)
tweet2 = Tweet.new("need coffee", coffee_dad)
tweet3 = Tweet.new("want coffee", coffee_dad)
tweet4 = Tweet.new("Life is a meaningless void", coffee_dad)

tea_uncle = User.new("Tea Uncle")

tweet5 = Tweet.new("I heart tea", tea_uncle)
tweet6 = Tweet.new("drinking tea", tea_uncle)
tweet7 = Tweet.new("Life's a happy song", tea_uncle)

tea_uncle.like_tweet(tweet1)
tea_uncle.like_tweet(tweet2)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet5)
coffee_dad.like_tweet(tweet5)

byebug
puts "done"