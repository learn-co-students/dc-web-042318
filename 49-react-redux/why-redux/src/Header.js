import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";

class Header extends Component {
  // componentDidMount() {
  // fetch().then(props.updateFromFetch(json))
  // }

  // componentDidMount() {
  // props.doTheFetch();
  // }

  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

// function mapStateToProps
const headerMapStateToProps = state => {
  return {
    count: state.count
  };
};

// connect
// how does connect know to use the state from our store?
// ((state) => props) => (component) => connectedComponent
// connected header will update whenever the store updates
const ConnectedHeader = connect(headerMapStateToProps)(Header);
export default ConnectedHeader;
