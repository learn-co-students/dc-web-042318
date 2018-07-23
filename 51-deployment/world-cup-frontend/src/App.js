import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const url = "http://localhost:3000/players";

class App extends Component {
  // componentDidMount() {
  // fetch(url)
  // .then(res => res.json())
  // .then(players => console.log(players));
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
