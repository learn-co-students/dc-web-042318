import React from "react";
import { connect } from "react-redux";

// img src of the profile picture
const ProfilePic = props => (
  <div>
    <img src={props.imageSrc} />
  </div>
);

const mapStateToProps = state => {
  return {
    imageSrc: state.currentUser.imageSrc
  };
};

const ConnectedProfilePic = connect(mapStateToProps)(ProfilePic);
export default ConnectedProfilePic;
