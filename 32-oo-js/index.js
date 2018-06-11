// Objects can have function properties
let person = {
  name: "Rob",
  occupation: "Instructor"
};

function sayGreeting(name, greeting) {
  return name + " says " + greeting;
}

person.greet = sayGreeting;
person.greet(person.name, "hello"); // => "Rob says hello"
