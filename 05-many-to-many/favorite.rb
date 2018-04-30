class Favorite

	attr_accessor :user, :tweet

	@@all = []

	def initialize(user, tweet)
		if self.already_exist?(user, tweet)
			return "You've already favorited that"
		else
			@user, @tweet = user, tweet
			@@all << self
		end
	end

	def already_exist?(user, tweet)
		# returns true/false if favorite linking tweet and user already exists
		already_exist = @@all.find{|favorite| favorite.user == user && favorite.tweet == tweet}
		if already_exist
			return true
		else
			return false
		end
	end

	def self.all 
		@@all
	end

	def delete_favorite
		#removes favorite from @@all array
		@@all.delete(self)
	end
	
end