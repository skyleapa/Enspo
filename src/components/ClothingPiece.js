import React from "react";
import logo from "./logo.png";

const ClothingPiece = (props) => {
  const images = {
    "./logo.png": logo,
  };

  let usedImage = images["./logo.png"];

  return (
    <div className="clothing">
      <div className="clothing-image">
        <img src={props.image} alt="testie" id="items-img"></img>
      </div>
      <div className="content">
        <div className="name">{props.name}</div>
        <div className="tags">{props.tags}</div>
      </div>
    </div>
  );
};

export default ClothingPiece;
