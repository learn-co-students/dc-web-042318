class Book < ActiveRecord::Base

	def author_titlecase
		self.author.titlecase
	end

end
