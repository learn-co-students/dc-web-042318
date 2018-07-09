import React from "react";

const baseUrl = "http://localhost:3000";

class UserPage extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    fetch(`${baseUrl}/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ user: json });
      });
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <div>
            <h1>{this.state.user.name}</h1>
            <p>{this.state.user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default UserPage;
