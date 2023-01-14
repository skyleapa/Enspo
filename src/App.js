import React from "react";
import SearchBar from "./components/SearchBar";
import "./style.css";
import Lookbook from "./components/lookbook";
import "reactjs-popup/dist/index.css";
import ClothingPiece from "./components/ClothingPiece";
// import Prompt from "./Prompt";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const App = () => {
  return (
    <>
      {/* <Prompt /> */}
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
          <div className="welcome">Welcome to your Aritzia Lookbook!</div>
          <hr />
        </div>
        {/* <div className="Search">
            <SearchBar />
          </div> */}
        <div className="lookbooks">
          <div className="lookbook1">
            <Lookbook />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
