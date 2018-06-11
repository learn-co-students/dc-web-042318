"use strict";

// console.log("welcome to objects");
//
// // literal
//
// // let champs = {
// //   name: "Capitals"
// // };
//
// // let nextChamps = {
// // name: "Capitals"
// // };
//
// // Factory pattern
//
// // create instances
// // parameterize our instance creation
//
// function celebrate() {
//   console.log(
//     "WOOOH! the ",
//     this.name,
//     "won the ",
//     this.year,
//     "Cup!!!!!!!!!!!!!"
//   );
// }
//
// let protoChamp = {
//   celebrate
// };
//
// function teamChampFactory(name, year, sport) {
//   let newChamp = Object.create(protoChamp);
//   newChamp.name = name;
//   newChamp.year = year;
//   newChamp.sport = sport;
//   return newChamp;
// }
//
// function hockeyChampFactory(year) {
//   return teamChampFactory("Capitals", year, "Hockey");
// }
//
// // prototype chain
//
// // Object.create
//
// // when we create this function, we !!!! also get a new object, .prototype, { constructor: function }
// // `class`
// // initialize method
//
// function TeamChamp(year) {
//   this.year = year;
// }
//
// function HockeyChamp(year) {
//   this.name = "Capitals";
//   this.sport = "hockey";
//   this.fans = [];
//   HockeyChamp.all.push(this);
// }
// HockeyChamp.all = [];
//
// HockeyChamp.prototype = Object.create(TeamChamp.prototype);
// HockeyChamp.prototype.addFan = function(fan) {
//   this.fans.push(fan);
// };
//
// let champ = new HockeyChamp(2018); // champ.__proto__.__proto__ === TeamChamp.prototype
//
// // instance method!
// HockeyChamp.prototype.celebrate = celebrate;
//
// // constructor call
// // let champs = new HockeyChamp(2018);
// // champs.__proto__ === HockeyChamp.prototype
//
//
//
//

class HockeyChamp {
  constructor(year) {
    this.year = year;
  }

  celebrate() {
    console.log("Yay!");
  }
}

class User {
  constructor() {
    User.all.push(this);
  }

  login() {}

  save() {}

  render() {}

  static saveAll() {}
}

User.all = [];
let Rob = new User();
// renderUser({});
// saveUser({});
User.saveAll = function() {};
User.saveAll();
