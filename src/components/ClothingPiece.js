import { getAllByAltText } from "@testing-library/react";
import React from "react";
import data from "./data/clothes.json";

console.log(data);
const ClothingPiece = (props) => {
  return (
    <div className="clothing">
      <img alt="artifact" src={props.image}></img>
      <div className="content">
        <div className="name">{props.name}</div>
        <div className="tags">{props.tags}</div>
      </div>
    </div>
  );
};

export default ClothingPiece;

