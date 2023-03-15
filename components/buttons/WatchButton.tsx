import React from "react";
import PlayCircleIcon from "../icons/PlayCircleIcon";
import { ButtonProps } from "./Button";

export interface WatchButtonProps extends ButtonProps {
  transparent?: boolean;
  bordered?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const WatchButton = ({ disabled = false, label, transparent = true,size="small",bordered=false }: WatchButtonProps) => {
  
  return (
    <button type="button" data-button={transparent ? `watch` : `watch-transparent-${size}${bordered && "-bordered"}`} disabled={disabled}>
      <PlayCircleIcon color={transparent ? "white" : (disabled ? "grey" : "black")} size={size==="big"? "large" : "medium"}/>

      {label}
    </button>
  );
};

export default WatchButton;
