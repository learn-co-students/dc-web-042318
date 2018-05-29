class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks

    validates :name, presence: true, uniqueness: true
    validate :year_established_must_be_valid

    def year_established_must_be_valid
        if !(self.year_established > 1800 && self.year_established <= Date.today.year)
            errors.add(:year_established,
                       " must be greater than 1800 and before today")
        end
    end
end
