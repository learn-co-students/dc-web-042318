# Functions in JavaScript
- Key part of JS as well as almost all programming languages
- DRY coding (Don't Repeat Yourself)
- Modular programming


## Statements vs. Expressions
- unit of execution that has side effects
- if statements, loops, switch Statements
- can use expressions


### Expressions
- 2+2
- Something that can be evaluated/returns a value
- Functions
- Literals
- Object property accessors
- reduced to a primitive data type
- Can I put it on the right right of an assignment


## Ways to Write Functions
- Function Declaration (statements)
- reference by name

```js
function sayHello(name){
  console.log("hello " + name);
};

```

- Function expressions

```js
var sayHi = function(num){
  return num*num;
}
```

- Arrow Syntax

```js
var addFunctions = (x, y) => {
  return x + y;
}
//Optional Parenthesis if the function takes one arg
var returnValue = x => {
  return x;
}
```

## Functions as First Class Objects
- Objects in JS
- Assign to variables
- Reassign different objects to the same variable
- Pass them as parameters into another functions

```js
//Pass a func to another func
function higherOrder(func){
  console.log("inside the higher order function");
  func();
};

var subFunction = function(){
  console.log("inside the sub function");
}

higherOrder(subFunction);
```
- Return them from functions

```js
//Return a function from another functions
function multipleBy(multipler){
  var multipleByNumer = function(num){
    return multipler * num;
  }
  return multipleByNumer;
}

var multiplyByTwo = multipleBy(2);
var multiplyByThree = multipleBy(3);
var multiplyByFour = multipleBy(4);

console.log(multiplyByThree(2));
console.log(multiplyByFour(2));
```


## Scope
 - var, let, const

### var
 - var least strict
 - functional scope if declared within a function; other global
 - redeclared with same scope, or more specific scope, priority given to the smaller scope

### let
 - let has block Scope
 - cannot be redeclared within the same scope
 - but you can reassign within the same scope

### const
 - const is most strict
 - cannot be redeclared or reassigned within the same scope
 - const has block scope
 - is still mutable
