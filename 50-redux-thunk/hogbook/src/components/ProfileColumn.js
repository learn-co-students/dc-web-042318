import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileDetails from "./ProfileDetails";
import { connect } from "react-redux";
import { loadProfile } from "../redux/actions";

class ProfileColumn extends React.Component {
  componentDidMount() {
    this.props.mount();
  }

  render() {
    return this.props.currentUser ? (
      <div>
        <ProfilePic />
        <ProfileDetails />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => ({ currentUser: state.currentUser });

const mapDispatchToProps = dispatch => {
  return {
    mount: () => dispatch(loadProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileColumn);
