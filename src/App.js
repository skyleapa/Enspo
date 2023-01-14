import React from "react";
import SearchBar from "./components/SearchBar";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="welcome-container">
          <div className="welcome">Welcome to Aritzia Lookbook!</div>
          <hr />
        </div>
        <div className="slogan">Everyday luxury. </div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
