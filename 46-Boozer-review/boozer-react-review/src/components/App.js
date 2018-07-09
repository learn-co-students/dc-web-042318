import React, { Component } from "react";
import CocktailsContainer from "../containers/CocktailsContainer";
import logo from "../logo.svg";
import "../stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boozer</h1>
        </header>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
