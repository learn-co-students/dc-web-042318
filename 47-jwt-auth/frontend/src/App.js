import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Login from "./Login";
import UserPage from "./UserPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Login logIn={this.logIn} />
        <UserPage loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
