class Movie < ApplicationRecord
    belongs_to :director

    validates :title, presence: true, uniqueness: true

    def director_name
        if self.director
            self.director.name
        else
            nil
        end
    end
end
