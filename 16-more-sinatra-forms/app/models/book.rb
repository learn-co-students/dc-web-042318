class Book < ActiveRecord::Base
	belongs_to :author

	def author_titlecase
		if self.author
			self.author.name.titlecase
		else
			''
		end
	end

end
