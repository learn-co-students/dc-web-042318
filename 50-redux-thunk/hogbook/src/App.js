import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfileColumn from "./components/ProfileColumn";
import SearchBar from "./components/SearchBar";
import HogPosts from "./components/HogPosts";
import ChatBox from "./components/ChatBox";
// import ProfilePic from "./components/ProfilePic";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileColumn />
        <div>
          <SearchBar />
          <HogPosts />
        </div>
        <ChatBox />
      </div>
    );
  }
}

export default App;
