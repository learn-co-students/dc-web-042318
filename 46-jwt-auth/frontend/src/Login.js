import React from "react";

const baseUrl = "http://localhost:3000";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="username"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="password"
          />
          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
