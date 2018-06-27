import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const tasks = [
  { id: 1, content: "Water the grapefruit tree" },
  { id: 2, content: "Milk the goat" }
];

class App extends Component {
  constructor() {
    super();
    this.counter = 0;

    this.state = {
      tasks: []
      // tasks: tasks
    };
  }

  addTask = content => {
    this.setState({
      tasks: [...this.state.tasks, { content: content, id: this.counter }]
    });
    this.counter++;
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <TaskForm onSubmit={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
