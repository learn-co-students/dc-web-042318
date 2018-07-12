import React from "react";
import { connect } from "react-redux";

const Tier3 = props => (
  <div
    className="tier3"
    onClick={props.generateColors}
    style={{ backgroundColor: props.color, color: props.color }}
  />
);

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
)(Tier3);
