import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import About from "./components/About";
import TaskDetailView from "./components/TaskDetailView";

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
        <Route component={Navbar} />
        <Switch>
          <Route
            path="/tasks/:id"
            render={props => {
              return (
                <TaskDetailView
                  task={this.state.tasks.find(
                    t => t.id == props.match.params.id
                  )}
                />
              );
            }}
          />
          <Route path="/about" component={About} />
          <Route
            path="/tasks"
            render={props => {
              return (
                <div>
                  <TaskForm
                    onSubmit={value => {
                      this.addTask(value);
                      // change the route to /tasks/:id
                      props.history.push("/about");
                    }}
                  />
                  <TaskList
                    removeTask={this.removeTask}
                    tasks={this.state.tasks}
                  />
                </div>
              );
            }}
          />
        </Switch>
        <div>
          <Link to="/nav">Click to see the navbar</Link>
        </div>
        <div>
          <Link to="/">Click to hide the navbar</Link>
        </div>
      </div>
    );
  }
}

export default App;
