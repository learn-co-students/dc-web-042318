
class CatsController < ApplicationController
  def index
    cat_array = Cat.all
    # binding.pry
    hash_cat_array = cat_array.map { |cat| { id: cat.id, name: cat.name, age: cat.age, breed: cat.breed, quote: cat.quote } }
    render json: { cats: hash_cat_array }
  end
end
