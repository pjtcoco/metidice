import React from "react";
import { IconProps } from "./props";

const BoardIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 3V7H3V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H9.5ZM10.5 3V12H17V6C17 5.20435 16.6839 4.44129 16.1213 3.87868C15.5587 3.31607 14.7956 3 14 3H10.5ZM17 13H10.5V17H14C14.7956 17 15.5587 16.6839 16.1213 16.1213C16.6839 15.5587 17 14.7956 17 14V13ZM9.5 17V8H3V14C3 14.7956 3.31607 15.5587 3.87868 16.1213C4.44129 16.6839 5.20435 17 6 17H9.5Z" />
      </svg>
    </span>
  );
};

export default BoardIcon;
