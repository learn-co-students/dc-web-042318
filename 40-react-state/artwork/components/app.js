import React from "react";
import Navbar from "./navbar";
import PaintingsList from "./paintings_list";
import paintings from "../data/artworks";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.filterPaintings = this.filterPaintings.bind(this);
  }

  updateSearchTerm(newTerm) {
    this.setState({ searchTerm: newTerm });
  }

  filterPaintings() {
    return paintings.filter(painting =>
      painting.title.toLowerCase().includes(this.state.searchTerm)
    );
  }

  render() {
    return (
      <div>
        <Navbar
          title="Paintr"
          color="red" /* overriding default prop blue */
          icon="paint brush"
          subtitle="A list of paintings"
          searchTerm={this.state.searchTerm}
          // pass in functions when we want them to be called later
          updateSearchTerm={this.updateSearchTerm}
        />
        <PaintingsList
          /* pass in calls to functions (return value of functions when we want the return values */ paintings={this.filterPaintings()}
        />
      </div>
    );
  }
}

export default App;
