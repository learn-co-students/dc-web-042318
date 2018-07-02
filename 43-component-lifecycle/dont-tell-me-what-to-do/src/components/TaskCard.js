import React from "react";

// const content = "Change the mock content into a prop";

class TaskCard extends React.Component {
  componentWillUnmount() {
    console.log("deleting", this.props.text);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.id !== props.id) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    throw "New Error!";
    return (
      <div>
        {this.props.text}
        <input onClick={this.props.delete} type="checkbox" />
      </div>
    );
  }
}

export default TaskCard;
