"use strict";

// Objects can have function properties
let person = {
  name: "Person",
  occupation: "Instructor"
};

function sayGreeting(name, greeting) {
  console.log("this is", this);
  return name + " says " + greeting;
}

// sayGreeting("Sam", "TGIM");

let greeting = sayGreeting.bind(person);
// let result = person.greet(person.name, "hello"); // => "Rob says hello"
// console.log(result);

let rob = {
  name: "Rob",
  occupation: "Instructor",
  students: [1, 2, 3, 4],
  greet: () => {
    // var self = this;
    // func(item, index, arr);
    console.log(this);
    rob.students.forEach(student => {
      // what is this?
      // rob
      // global
      // undefined
      console.log(this);
    });
  }
};

// what is this?
// rob object
// undefined
// global

rob.greet();
// let greet = rob.greet;
// greet();

// set the `this` object
// let boundGreet = rob.greet.bind(rob);

// let sam = {
//   name: "Sam",
//   greet: rob.greet.bind(rob, "Bird")
// };
//
// let greet = rob.greet;
//
// // greet.call(sam, "Bird", "Is the Word");
// greet.apply(sam, ["Bird", "Is the Word"]);

// sam.greet("The Word");

// what will `this` be?
// rob object
// sam object
// window
// undefined

// rob.greet();
// sam.greet();
// greet();

// console.log(rob.greet === sam.greet);

// function multiplyBy(multiplier) {
//   return function mult(x) {
//     return x * multiplier;
//   };
// }
//
// function multiply(x, y) {
//   return x * y;
// }

// let multByTwo = multiplyBy(2);
// let multByTwo = multiply.bind(null, 2);
