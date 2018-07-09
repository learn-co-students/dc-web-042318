import React from "react";

const baseUrl = "http://localhost:3000";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    e.preventDefault();

    let params = {
      username: this.state.username,
      password: this.state.password
    };

    let url = "http://localhost:3001/login";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.props.logIn();
      });
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
