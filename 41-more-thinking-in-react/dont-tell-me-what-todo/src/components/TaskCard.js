import React from "react";

// const content = "Change the mock content into a prop";

const TaskCard = props => (
  <div>
    {props.content}
    <input type="checkbox" />
  </div>
);

export default TaskCard;
