import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => (
  <div>
    <h2>Here are your tasks:</h2>
    <ul>
      {tasks.map(task => <TaskCard key={task.id} content={task.content} />)}
    </ul>
  </div>
);

export default TaskList;
