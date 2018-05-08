class Artist < ActiveRecord::Base
	attr_accessor :name, :genre
	private :genre
end
