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

end
