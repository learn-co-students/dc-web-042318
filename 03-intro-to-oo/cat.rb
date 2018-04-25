require 'byebug'

class Cat

	attr_reader :name, :species
	attr_accessor :color, :number_of_legs

	@@ALL = []

	def initialize(name, color, number_of_legs=4)
		@name = name
		@color = color
		@number_of_legs = number_of_legs
		@species = "feline"
		@@ALL << self
	end

	def meow
		"Hi my name is #{self.name} and I am a beautiful #{self.color} cat.  Meow."
	end
	
	def friends_with(cat)
		"Hi my name is #{self.name} and I am besties with #{cat.name}"
	end

	def self.all
		@@ALL
	end

	def self.all_names
		@@ALL.map {|cat| cat.name}
	end
	
	def self.get_all_cats_with_color_of(color)
		@@ALL.map {|cat| cat.name if cat.color==color}.compact
	end
end


ella = Cat.new("Ella", "black")
lexi = Cat.new("Lexi", "orange", 3)
salem = Cat.new("Salem", "black")
binx = Cat.new("Binx", "black")
garfield = Cat.new("Garfield", "orange")


byebug
puts "done"