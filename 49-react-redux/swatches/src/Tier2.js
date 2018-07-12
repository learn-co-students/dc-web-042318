import React from "react";
import Tier3 from "./Tier3";
import { connect } from "react-redux";

const Tier2 = props => (
  <div
    className="tier2"
    onClick={props.generateColor}
    style={{ backgroundColor: props.color, color: props.color }}
  >
    <Tier3 id={props.id + ".1"} />
    <Tier3 id={props.id + ".2"} />
  </div>
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
)(Tier2);
