import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import hogs from "../porkers_data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greased: false,
      sort: "name"
    };
  }

  handleSortTypeChange = e => {
    console.log("sort type", e.target.value);
    this.setState({
      sort: e.target.value
    });
  };

  sortByWeight = hogs => {
    return hogs.sort(
      (a, b) =>
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] -
        a[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ]
    );
  };

  sortByName = hogs => {
    return hogs.sort((a, b) => a.name.localeCompare(b.name));
  };

  getSortedPigs = hogs => {
    return this.state.sort === "weight"
      ? this.sortByWeight(hogs)
      : this.sortByName(hogs);
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter sortTypeChange={this.handleSortTypeChange} />
        <HogList hogs={this.getSortedPigs(hogs)} />
      </div>
    );
  }
}

export default App;
