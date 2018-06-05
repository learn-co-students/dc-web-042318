# Loops and Callbacks

## What kinds of problems can you solve with a loop?
iterate - do something lots of times
find something something in a list
side effects - e.g. display items in a list

combinations - e.g. multiple arrays, match pairs

aggregrate functions
  total
  average
  frequency
  max / min

transform - change every item
sort
filter - select certain items that pass a test

### Some examples
Side effects
  Printing

Transform the list
  Sort
  Filter
  Uniq

Transform each element
  pluck a value
  compute

Aggregates
  Count
  Average

### Kinds of Loops and Array methods

#### javascript keywords / statements
for -
counter initialization
condition
something to do each time, to increment the value
```
for(let i = startValue; i < 100; i++) {
  ...action to perform here
}
```

for of - behaves pretty differently
- no initialization before the loop
- instead, declares and assigns the variable with block scope
- works for arrays, strings and sometimes for other stuff, if that stuff is iterable
- can define a property [Symbol.iterator] if you want an object to be iterable
```
for(const x of [some iterable thing]) {
  ...do something with x
}
```

for in
- for objects!
- iterate over the 'enumerable properties of an object'
```
for(const x of [some iterable thing]) {
  ...do something with x
}
```

while - can sometimes just do the action once
```
while(condition) {
  ... do something
}
```
do while - performs the action at least once
```
do {
  ... do something
} while (condition)
```

#### Array methods

iterate - do something lots of times
  side effects - e.g. display items in a list, set a timer, fetch from database
.forEach
  - only for the side effects
    - shoveling things into another array
    - printing
    - returns undefined
    - takes a callback function
    - calls the callback function with (item, index, the whole array) for all of the items

transform - change every item
.map
  - transforms
  - returns a value
  - new array of transformed items

filter - select certain items that pass a test
.filter
  - select in ruby
  - filters based on some condition
  - callback function gets each item, returns a boolean

sort
.sort

find something something in a list
.find

combinations - e.g. multiple arrays, match pairs
// .zip (ruby) (underscore, lodash)
[1,2,3].zip(['a', 'b', 'c']) => [[1,a],

aggregrate functions
  total
  average
  frequency
  max / min
.reduce



#### List

for loop
while loop
do while

foreach


## Callbacks

A function as an argument
Can be defined inline, as an anonymous function
also can be defined elsewhere
