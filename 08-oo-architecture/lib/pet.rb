class Pet

  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

end

# require 'pry'
#
# binding.pry
#
# puts 'pet'
