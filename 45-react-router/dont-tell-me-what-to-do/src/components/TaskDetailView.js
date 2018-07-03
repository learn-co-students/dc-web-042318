import React from "react";

const TaskDetailView = ({ task }) => {
  return (
    <div>
      {task.id}: {task.text}
    </div>
  );
};

export default TaskDetailView;
