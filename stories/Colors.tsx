import React from "react";
interface ColorProps {
  color: "primary" | "secondary" | "tertiary" | "helperBlue1" | "helperBlue2" | "helperBlue3" | "black" | "grey" | "background" | "error";
}

const Colors: React.FC<ColorProps> = ({ color }) => {
  return <div className={`color__${color} color__container`}>
    {/* <span>...</span> */}
  </div>;
};

export default Colors;
