import React, { Component } from "react";
import { connect } from "react-redux";
import Tier2 from "./Tier2";

class Tier1 extends Component {
  componentDidMount() {
    this.props.generateColors();
  }

  render() {
    return (
      <div
        onClick={this.props.generateColors}
        className="tier1"
        style={{ backgroundColor: this.props.color, color: this.props.color }}
      >
        <Tier2 id={this.props.id + ".1"} />
        <Tier2 id={this.props.id + ".2"} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    color: state[ownProps.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    generateColors: e => {
      e && e.stopPropagation();
      dispatch({ type: "GENERATE_COLORS", id: ownProps.id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tier1);
