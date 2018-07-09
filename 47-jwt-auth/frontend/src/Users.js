import React from "react";

const baseUrl = "http://localhost:3000";

class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(`${baseUrl}/users`)
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    console.log(this.state);
    return <div>{this.state.users.map(u => <div>{u.name}</div>)}</div>;
  }
}

export default Users;
