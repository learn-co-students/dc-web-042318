class Song < ActiveRecord::Base
	belongs_to :album
	belongs_to :genre
end	