import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const url = "http://localhost:3000/todos";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks() {
    fetch(url)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks: tasks }));
  }

  addTask = content => {
    const newTask = { text: content };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(createdTask => {
        this.setState({
          tasks: [...this.state.tasks, createdTask]
        });
      });
  };

  removeTask = id => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <TaskForm onSubmit={this.addTask} />
        <TaskList removeTask={this.removeTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
