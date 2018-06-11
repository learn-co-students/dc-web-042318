# Object Oriented Javascript

## `this` and Function Execution Context

Rules:
1. `this` in the global context is window (or 'global' in node)
  a. in a function, in strict mode, undefined (sloppy mode - global)
2. when a function is called as a 'method', `this` is the object
3. can control `this` using bind, call, and apply
    this is the first argument to the method
4. arrow functions get the `this` from the enclosing scope

### Strict Mode

"use strict";

Raise more errors

`this` no longer the global object


### Object 'Methods'

js `this` vs. ruby `self`

self is defined by where we wrote the method

```
class Dog
  def bark
    puts "#{self.noise}"
  end
end
```

in js, `this` is defined by where we _call_ the method


How do we control what `this` will be?

## `bind`, `call`, `apply`

`bind` - lets us set the `this` object to an argument
- returns a new function, doesn't modify the function
- cannot rebind to some new context
- can pass in additional args to 'set' them, get back a function with those args preset
   - used for 'partial application'

HW: can we tell if a function has been bound?

`call` - calls the function
 - bind still overrides
 - first argument gets assigned to `this`
 - subsequent args get passed through

`apply` - calls the function
- same as call
- except!
- takes an array as the second argument

## Arrow Functions

now `this` is defined by where the function is written
(gets the same `this` as its enclosing scope)

(similar to the `var self = this` pattern)
