# Intro to Javascript

- History of Javascript
- Where does javascript fit in?
- JavaScript Language Overview
- How to Do Labs

## History

XMLHttpRequest
"Ajax"
Fetch data without a page reload

Before Ajax
GET request to show new data

```
arr.each { |a| a.do_something }
```

first class functions

node
execute javascript without a browser

```
ruby name_of_ruby_file.rb
```

```
node name_of_js_file.js
```

## Javascript's role

Written everywhere!

Language of the web

## Data types

---
```
x # not valid
x = 6 # assignment and declaration
```

```
undefined;
void 0;
var x; // declared
x // undefined
x = 6; // assignment
x // 6;

function doSomething () {
  // ???
  return null;
}
```

'Primitive'
  Function can't change the original version
  'safe'

undefined - is 'declared' not 'assigned' (or explicitly created undefined)
null - 'represents' having no value (nil in ruby)
---
String -
```
'literal'
"Double"
`${2 + 2}` // template literal
```
  split
  slice
  (join)
  toLowerCase
  toUpperCase
  length (property)

Number
  only one kind of number
  floating point numbers will be weird
  NaN
  Infinity

Boolean
  true false
  'falsey' - null, undefined, false, "", 0, NaN
  ! negates
  || && - or and

Symbol
---

Non-Primitive
  Passed by reference
  Functions can change them (if they are arguments)

Object
```
 { property: 'values' }
```
  keys get coerced to strings (don't use objects as keys)

  Array
```
  [1,2,3]
```
  can have properties, but probably shouldn't
    array methods - tomorrow morning
  Function
    can pass them around
    lots of implications -- cover later



Memory
```
var a = 5
var b = {}
var c = "hello world"
b[9] = 10

function changeString(string)  {
  return string + "change"
}

function changeObject(object) {
  object["property"] = "value"
}

changeString(c)
```

which variable is which item on the stack?
b is "new"

[5, "hello, world", reference to some point on the heap 'b', "hello world", "new"] // Stack - running program memory

[{ 9: 10}] // Heap - extra memory that the program can grab as it wants
