class Snack < ApplicationRecord
    belongs_to :retailer
    accepts_nested_attributes_for :retailer

    # validations

    validates :name, presence: true
    validates :calories, presence: true
    validates :deliciousness, presence: true
end
