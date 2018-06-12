console.log("Welcome, caps fans!");

// console.log("before definition!", getHeader());

// const getHeader = function() {
//   const header = document.querySelector(".header");
//   return header;
// };
//
// const getHeaderArrow = () => document.querySelector(".header");
//
// // don't invoke this before the dom has loaded
// function doSomething() {
//   let value = getHeader().textContent;
//   console.log(value);
// }
//
// function addHeaderClickHandler() {
//   getHeader().addEventListener("click", doSomething);
// }

// add listener for dom load
// dom loads
// add listener for click

class Student {
  constructor(name) {
    this.name = name;
    this.classes = [];
  }

  register(aClass) {
    // possible that also check that student isn't already registered
    aClass.students.push(this);
    this.classes.push(aClass);
  }

  // many through
  instructors() {
    this.classes.map(c => c.instructor);
  }

  renderClasses() {}

  render() {
    return `<div class="student">${this.name}</div>`;
  }
}

class Class {
  constructor(instructor, name) {
    this.instructor = instructor;
    this.instructor.classes.push(this);
    this.name = name;
    this.students = [];
    Class.all.push(this);
  }

  render() {}

  renderStudents() {
    return `<ul>
      ${this.students.map(s => `<li>${s.render()}</li>`).join("")}
    </ul>`;
  }
}

const getClassElement = () => document.querySelector(".class-element");

function renderAllClassStudentsToDom(aClass) {
  getClassElement().innerHTML = aClass.renderStudents();
}

Class.all = [];

class Instructor {
  constructor(name) {
    this.name = name;
    this.classes = [];
  }
}

const studentNames = ["Nicole", "Ann", "Sam"];

document.addEventListener("DOMContentLoaded", () => {
  const rob = new Instructor("rob");
  const students = ["Nicole", "Ann", "Sam"].map(s => new Student(s));
  const myClass = new Class(rob, "algebra");
  students.forEach(s => s.register(myClass));
  renderAllClassStudentsToDom(myClass);
});
