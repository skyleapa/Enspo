import React from "react";
import SearchBar from "./components/SearchBar";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="welcome">Welcome to Aritzia!</div>
        <SearchBar />
        <div>Hello hackers!</div>
      </div>
    );
  }
}

export default App;
