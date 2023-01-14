import React from "react";
import SearchBar from "./components/SearchBar";
import "./style.css";
import Lookbook from "./components/lookbook";
import Image from "./logo.png";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div logo-container>
            <img src={require("./logo.png")} alt="test" id="logo-img"></img>
          </div>

          {/* <div class="flexbox-item">
            <div class="nice">
              <ul>
                <li>Header 1</li>
                <li>Header 2</li>
                <li>Header 3</li>
              </ul>
            </div>
          </div> */}
        </header>
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
