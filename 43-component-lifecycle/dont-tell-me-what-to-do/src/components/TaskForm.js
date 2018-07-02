import React from "react";

// class TaskForm extends React.Component {
//    submitForm() {
//        ...
//       this.props.onSubmit()
//    }
//    ...
// }
const TaskForm = ({ onSubmit }) => (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        const val = e.target.querySelector("input").value;
        e.target.reset();
        onSubmit(val);
      }}
    >
      <input type="text" placeholder="Add a Task" />
      <button>Create Task</button>
    </form>
  </div>
);

export default TaskForm;
