class Artist < ActiveRecord::Base
	has_many :songs, through: :albums
	has_many :genres, through: :songs
	has_many :albums
end
