import React from "react";
import Navbar from "./navbar";
import PaintingsList from "./paintings_list";

// create element - creates objects representing 'virtual' dom elements
// const helloDiv = string =>
//   React.createElement("div", {}, [
//     React.createElement("div", {}, "nested"),
//     React.createElement("div", {}, string)
//   ]);

// navbar component
// why not a class?
// a tag doesn't link to anything
// defining component inline
// {React.createElement(Navbar, {
//   title: "Paintr",
//   color: "blue",
//   icon: "paint brush",
//   subtitle: "A list of paintings"
// })}

const App = () => {
  return (
    <div>
      <Navbar
        title="Paintr"
        color="red" /* overriding default prop blue */
        icon="paint brush"
        subtitle="A list of paintings"
      />
      <PaintingsList />
    </div>
  );
};

export default App;
