class Person < ActiveRecord::Base
	# attr_accessor :name, :age, :hometown

	# def initialize(name, age, hometown)
	# 	@name = name
	# 	@age = age
	# 	@hometown = hometown
	# end

	def upcase_name
		self.name.upcase
	end

end