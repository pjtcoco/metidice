import React from "react";
interface ShadowProps {
  shadow: "button" | "card1" | "card2" | "card3" | "dropdown";
}

const Shadows: React.FC<ShadowProps> = ({ shadow }) => {
  return <div className={`shadow__${shadow} shadow__container`}></div>;
};

export default Shadows;
