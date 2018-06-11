# Object Oriented Javascript

- object creation patterns
- constructor calls and `new`
- 'prototype'
- `class` syntax

Why object oriented programming?
- Reuse code
- Organize code
- 'responsibilities'
- group data and behavior
- map real world problems to our code

```
person.greet()
// 'hi'
greet(person);
// 'hi'
```

What should we be able to do with objects?
- x attributes (store some data on our objects) (instance variables)
   - literal
- x (dry up our object creation) (create many instances)
   - factory pattern
- x methods (call some function associated with the object)
- x instance methods - behavior of one of these kinds of objects
  - privacy (no way to indicate privacy in js, ignore)

- class methods - behavior associated with the whole class
- class variables - data kept between calls

- inherit characteristics between classes
  - Car is a Vehicle
  - Plane is a Vehicle

- x instances of objects have relationships with each other
  - x Teacher has many students

## Object Creation Patterns

- literal
- Factory pattern
- Object.create
- `new` Object

## `Object.create`, Prototype Chain, and `__proto__` delegation

when we try to access a property
  -> if it exists in the object's keys, return it
  -> if it does not -> look up the prototype chain (look in the __proto__ object)

not everything has a __proto__ - Object.create(null), we don't have access to any default object (properties) methods
when we create an object with the literal syntax, it gets the 'root' object as __proto__

Object.create -- sets a new object's __proto__ to the argument

## `new` and Constructor calls

special call `new` - different behavior
  - this = new object with __proto__ set to the function's prototype
  - (don't follow the other this rules)
  - automatically returned the object

.prototype

## `class` syntax

sugar around functions that have constructor calls

methods on the prototype of the object
when we invoke with `new`, the function's prototype gets set to the new object's __proto__
