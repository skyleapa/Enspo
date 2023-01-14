import React from "react";
import SearchBar from "./components/SearchBar";
import "./style.css";
import Lookbook from "./components/lookbook";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header"></header>
        <div className="ui container">
          <div className="welcome-container">
            <div className="welcome">Welcome to Aritzia Lookbook!</div>
            <hr />
          </div>
          <div className="slogan">Everyday luxury. </div>
          <div className="Search">
            <SearchBar />
            {/* <button>Search</button> */}
          </div>
          <Lookbook />
        </div>
      </>
    );
  }
}

export default App;
