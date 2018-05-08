class Label
  attr_accessor :name, :ceo
  @@all = []

  def initialize(name, ceo)
    @name = name
    @ceo = ceo
    @@all << self
  end

  def self.all
    @@all
  end

  def contracts
    Contract.all.select {|contract| contract.label == self }
  end

  def bands
    self.contracts.map {|contract| contract.band}
  end

end
