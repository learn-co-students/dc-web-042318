import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Header from "./Header";
import store from "./store";

class App extends Component {
  // componentDidMount() {
  // obviously a bad hack
  // uses forceUpdate
  // uses subscribe
  // store.subscribe(() => this.forceUpdate());
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

// react router
// <BrowserRouter><App /></BrowserRouter>
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
