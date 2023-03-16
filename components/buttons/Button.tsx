import React from "react";

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  size?: "small" | "big";
  rounded?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ disabled = false, label, size = "small",rounded=false }: ButtonProps) => {
  return (
    <button type="button" data-button={`standard-${size}${rounded && "-rounded"}`} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
