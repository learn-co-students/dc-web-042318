import React from "react";
import { connect } from "react-redux";

const ProfileDetails = props => <div>Name: {props.name}</div>;

const mapStateToProps = state => {
  return {
    name: state.currentUser.name
  };
};

export default connect(mapStateToProps)(ProfileDetails);
