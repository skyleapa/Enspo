import React from "react";
import ClothingPiece from "./ClothingPiece";
import KeyClothingPiece from "./KeyClothingPiece";

const Lookbook = () => {
  return (
    <div className="image-container">
      <div className="position">
        <ClothingPiece
          image={require("./Aritzia_Logo.png")}
          name="Jeans"
          tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />{" "}
      </div>
      <div className="position">
        <ClothingPiece
          image={require("./Aritzia_Logo.png")}
          name="Jeans"
          tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />{" "}
        <br />
      </div>
      <div className="position">
        <ClothingPiece
          image={require("./mittens_low.png")}
          name="Jeans"
          tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />{" "}
        <br />
      </div>
      <div className="position">
        <ClothingPiece
          image={require("./SALE_cropped_crewneck_low.png")}
          name="Jeans"
          tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />{" "}
        <br />
      </div>
      <div className="position">
        <ClothingPiece
          image={require("./Aritzia_Logo.png")}
          name="Jeans"
          tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />{" "}
        <br />
      </div>
      <div className="position">
        <ClothingPiece
          image={require("./Aritzia_Logo.png")}
          name="Jeans"
          tags="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        />{" "}
        <br />
      </div>
    </div>
  );

  // return <div className="content">{props.children}</div>;
};

export default Lookbook;
