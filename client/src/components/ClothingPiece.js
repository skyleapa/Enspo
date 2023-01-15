import { getAllByAltText } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ClothingPiece = (props) => {
  const [closeness, setCloseness] = useState(0);

  useEffect(() => {
    axios
      .post("http://localhost:4242/closeness", {
        type: "comfy",
        tags: props.tags || [],
      })
      .then((response) => {
        const result = response.data;
        setCloseness(result);
      });
  }, []);

  return (
    <div className="clothing">
      <div className="clothing-image">
        <img src={props.image} alt="testie" id="items-img"></img>
      </div>
      <div className="content">
        <div className="name">{props.name}</div>
        <h2>{closeness}</h2>
      </div>
    </div>
  );
};

export default ClothingPiece;
