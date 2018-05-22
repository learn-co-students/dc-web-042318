class Snack < ApplicationRecord
    belongs_to :retailer
    accepts_nested_attributes_for :retailer
end
