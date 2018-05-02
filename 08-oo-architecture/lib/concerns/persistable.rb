require 'pry'
module Persistable
  module ClassMethods

    def reset_all
      self.all.clear
    end

    def count
      self.all.length
    end
  end

  module InstanceMethods

    def persisted?
      false
    end
  end
end
