import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <h2>Here are your tasks:</h2>
      <ul>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            delete={() => removeTask(task.id)}
            text={task.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
