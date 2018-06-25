import React from "react";
import ReactDOM from "react-dom";

// create element - creates objects representing 'virtual' dom elements
// const helloDiv = string =>
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

// react actually updates the dom
ReactDOM.render(helloDiv("picasso"), document.querySelector(".react-root"));
