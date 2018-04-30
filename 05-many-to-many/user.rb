class User

	attr_accessor :username

	def initialize(username)
		@username = username

	end

	def post_tweet(message)
		Tweet.new(message, self)
	end

	def tweets
		Tweet.all.select {|tweet| tweet.user == self}
	end

	def like_tweet(tweet)
	# create instance of Favorite linking User & Tweet
		if tweet.user == self
			"You can't like your own tweet, jerk."
		else
			Favorite.new(self, tweet)
		end
	end

	def liked_tweets
	# return all tweets user has liked
		user_favorites = Favorite.all.select{|favorite| favorite.user == self}
		favorite_tweets = user_favorites.collect{|favorite| favorite.tweet}
	end

	def unlike_tweet(tweet)
		# deletes favorite
		favorite_to_destroy = Favorite.all.find {|favorite| favorite.user == self && favorite.tweet == tweet}
		favorite_to_destroy.delete_favorite
	end


end
