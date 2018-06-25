// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

// note: easy to mess up
// const helloDiv = string =>
//   // create element - creates objects representing 'virtual' dom elements
//   React.createElement("div", {}, [
//     React.createElement("div", {}, "nested"),
//     React.createElement("div", {}, string)
//   ]);

const helloDiv = string => {
  return (
    <div>
      <div>nested</div>
      <div>{string}</div>
    </div>
  );
};

console.log(helloDiv("van gogh"));

// errors - doesn't know about import
// nothing
// error - not able to find the element because the script is loaded too late
// Uncaught SyntaxError: Unexpected identifier index.js:4
// successfully create the div

// react actually updates the dom
ReactDOM.render(helloDiv("picasso"), document.querySelector(".react-root"));

console.log("hello from the dev server");
