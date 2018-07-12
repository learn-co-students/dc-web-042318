import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.decrement(5)}> -5 </button>
        <button onClick={() => this.props.decrement(1)}> - </button>
        <button onClick={this.props.increment}> + </button>
        <button onClick={this.props.add3}> +3 </button>
      </div>
    );
  }
}

const counterMapStateToProps = state => {
  return {
    count: state.count
  };
};

const counterMapDispatchToProps = dispatch => {
  return {
    increment: () => {
      let action = { type: "increment", amount: 1 };
      dispatch(action);
    },
    decrement: amount => {
      let action = { type: "decrement", amount };
      dispatch(action);
    },
    add3: () => {
      let action = { type: "increment", amount: 3 };
      dispatch(action);
    }
  };
};

const ConnectedCounter = connect(
  counterMapStateToProps,
  counterMapDispatchToProps
)(Counter);

export default ConnectedCounter;
