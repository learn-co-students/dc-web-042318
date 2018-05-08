class Contract
  attr_accessor :band, :label, :value, :period

  @@all = []

  def initialize(value, period, band, label)
    @value = value
    @period = period
    @band = band
    @label = label
    @@all << self
  end

# your attr accessors write this code
  # def band
  #   @band
  # end
  #
  # def band=(band)
  #   @band = band
  # end

  def self.all
    @@all
  end

end
