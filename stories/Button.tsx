import React from "react";
interface ButtonProps {
  state: boolean;
}
const Button:React.FC<ButtonProps> = ({ state }) => {
  return <button type="submit">Learn more</button>;
};

export default Button;
