# { id: cat.id, name: name, ... hobbies: [{id: hobby.id, name: name }]}

# Two Parts:
# 1 - tell rails to include hobbies when serializing cats
# X  2 - tell rails how to serialize a hobby

class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :quote, :age, :created_at, :updated_at
  has_many :hobbies
end
