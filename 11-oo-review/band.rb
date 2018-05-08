class Band
  attr_accessor :name, :members, :cohesion
  @@all = []

  def initialize(name, members, cohesion=5)
    @name = name
    @members = members
    @cohesion = cohesion
    @@all << self
  end

  def self.all
    @@all
  end

  def labels
    # finds all labels a band has signed contracts with
    # Contract.all.select {|contract| contract.band == self }.map {|contract| contract.label}
    # Contract.all.map do |contract|
    #   if contract.band == self
    #     contract.label
    #   end
    # end.compact
    self.contracts.map {|contract| contract.label}
  end

  def contracts
    # finds all contracts a band has
    Contract.all.select {|contract| contract.band == self }
  end

end
