import React, { Component } from "react";
import "./App.css";
import Tier1 from "./Tier1.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tier1 id="1" />
        <Tier1 id="2" />
      </div>
    );
  }
}

export default App;
