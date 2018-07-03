import React from "react";

class TaskCard extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ margin: 5 }}>{this.props.text}</span>
          <input
            style={{ margin: 5 }}
            className="ui checkbox"
            onClick={this.props.delete}
            type="checkbox"
          />
        </div>
      </div>
    );
  }
}

export default TaskCard;
