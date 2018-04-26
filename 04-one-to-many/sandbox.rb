require 'pry'

class School

	attr_accessor :name, :instructors


	def initialize(name)
		@name = name
		@instructors = []
	end

	def add_instructor(name)
		self.instructors << name
	end

end

flatiron = School.new(name="Flatiron")
paul = Instructor.new()
niky = Instructor.new()
nicole = Instructor.new()
flatiron.add_instructor(niky)
flatiron.add_instructor(paul)
flatiron.add_instructor(nicole)

paul.School
#flatiron

flatiron.instructors
[]
binding.pry
puts 'done'