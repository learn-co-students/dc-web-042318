class Snack < ApplicationRecord
    belongs_to :retailer
    accepts_nested_attributes_for :retailer

    #validators
    validates :name, presence: true, uniqueness: true
    validates :calories, presence: true
    validates :deliciousness, presence: true
end
