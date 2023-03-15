import React from "react";
import "./button.css";

export interface ButtonProps {
disabled: boolean;
  label: string;

}

/**
 * Primary UI component for user interaction
 */
const Button = ({ disabled = false, label }: ButtonProps) => {
  return (
    // <div className="test">
      <button type="button" data-button="standard"  disabled={disabled}>
        {label}
      </button>
    // </div>
  );
};

export default Button;
