import React, { Component } from "react";
import "./App.css";
import Tier from "./Tier.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tier id="1" depth={2} />
        <Tier id="2" depth={2} />
      </div>
    );
  }
}

export default App;
