import React, { Component } from "react";
import { connect } from "react-redux";

class Tier extends Component {
  componentDidMount() {
    this.props.generateColors();
  }

  render() {
    return (
      <div
        onClick={this.props.generateColors}
        className="tier"
        style={{ backgroundColor: this.props.color, color: this.props.color }}
      >
        {this.props.depth > 0 ? (
          <ConnectedTier
            id={this.props.id + ".1"}
            depth={this.props.depth - 1}
          />
        ) : null}
        {this.props.depth > 0 ? (
          <ConnectedTier
            id={this.props.id + ".2"}
            depth={this.props.depth - 1}
          />
        ) : null}
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

const ConnectedTier = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tier);

export default ConnectedTier;
