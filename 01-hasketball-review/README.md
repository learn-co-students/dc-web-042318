# How to Engage with a Flatiron Lecture
- laptops at half-mast
- ask about unfamiliar methods, shortcuts, files
- google documentation
- notes and video will be posted after lecture


# Objectives
- navigate complex data structures
- learn the difference between ruby iterators
- understand SRP
- learn good habits for TDD and pry in labs

```ruby
instructors = [{name: 'rob', hometown: 'here', mood: 'excited'}, {name: 'niky', hometown: 'sf'}, {name: 'andy', hometown: 'city of angels'}]

def get_names(instructors)
  instructors.each {|i| puts i[:name]}
end
```

```ruby
array = [1,2,3,4,5]

array.map { |num| num.even? }

array.select { |num| 7 }
```

### Each
returns original hash or array
performs one operation for every element

### Map
returns a new array based off the block passed to map

### Select returns
returns elements for which the block is true
returns the original values themselves
