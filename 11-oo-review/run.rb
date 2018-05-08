require 'pry'
require_relative 'band'
require_relative 'label'
require_relative 'contract'

spice = Band.new("Spice Girls", ["scary", "sporty", "baby", "salty", "tangerine"], cohesion=1)
journey = Band.new("Journey", ["steve perry", "another dude", "gregg rolie"], cohesion=1)
coldplay = Band.new("Coldplay", ["chris martin", "another dude", "that guy"], cohesion=5)

warner = Label.new("Warner Records", "Madonna")
roc = Label.new("Roc Nation", "Jay-z")

Contract.new("$10,000,000", "1 year", spice, roc)
Contract.new("$1,000,000", "10 years", coldplay, roc)
Contract.new("$5,000,000", "5 years", spice, warner)
Contract.new("$20,000,000", "5 years", journey, warner)

binding.pry

puts 'stop here'
