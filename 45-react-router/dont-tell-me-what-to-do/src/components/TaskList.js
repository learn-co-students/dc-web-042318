import React from "react";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <h2>Here are your tasks:</h2>
      <ul>
        {tasks.map(task => (
          <Link to={`/tasks/${task.id}`}>
            <TaskCard
              key={task.id}
              delete={() => removeTask(task.id)}
              text={task.text}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
