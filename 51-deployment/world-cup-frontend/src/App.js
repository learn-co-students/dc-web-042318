import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

console.log(process.env["NODE_ENV"]);
const url =
  process.env["NODE_ENV"] === "development"
    ? "http://localhost:3000/players"
    : "https://world-cuppr.herokuapp.com/players";

class App extends Component {
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state &&
          this.state.players.map(player => (
            <div key={player.id}>{player.name}</div>
          ))}
      </div>
    );
  }
}

export default App;
