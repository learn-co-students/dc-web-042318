class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks

    validates :name, presence: true, uniqueness: true
    validates :year_established, presence: true
    validates :year_established_must_be_valid
    
    def year_established_must_be_valid
        if !(self.year_established > 1800 && self.year_established <= Date.today.year)
            self.errors.add(:year_established, "You must select a year between 1800 and #{Date.today.year}.")
        end
    end
end
