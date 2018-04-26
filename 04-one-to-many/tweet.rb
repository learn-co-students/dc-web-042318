class Tweet

	attr_reader :message, :user, :all

	@@all = []

	def initialize(message, user)
		@message = message
		@user = user
		@@all << self
	end

	def username
		self.user.username
	end

	def self.all
		# returns all tweets from all users
		@@all
	end

end