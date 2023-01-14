import React from "react";
import SearchBar from "./components/SearchBar";
import "./style.css";
import Lookbook from "./components/lookbook";
import ClothingPiece from "./components/ClothingPiece";
import Image from "./logo.png";
import KeyClothingPiece from "./components/KeyClothingPiece";

const App = () => {
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
          <div className="welcome">Welcome to your Aritzia Lookbook!</div>
          <hr />
        </div>
        <div className="slogan">Customize your wardrobe today. </div>
        {/* <div className="Search">
            <SearchBar />
          </div> */}
        <div className="lookbooks">
          <Lookbook />
          <Lookbook />
          {/* <Lookbook>
              <ClothingPiece Image="" name="" tags="" />
            </Lookbook>
            <Lookbook>
              <ClothingPiece Image="" name="" tags="" />
            </Lookbook>
            <Lookbook>
              <ClothingPiece Image="" name="" tags="" />
            </Lookbook> */}
        </div>
      </div>
    </>
  );
};

export default App;
