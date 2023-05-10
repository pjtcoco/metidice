import React from "react";
import { IconProps } from "./props";

const CommentIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.799 17.803C6.58612 17.9599 6.32014 18.027 6.05831 17.9898C5.79647 17.9526 5.55972 17.814 5.399 17.604C5.27016 17.4343 5.20028 17.2271 5.2 17.014V14.842H4.6C3.164 14.842 2 13.693 2 12.276V5.566C2 4.149 3.164 3 4.6 3H15.4C16.836 3 18 4.149 18 5.566V12.276C18 13.694 16.836 14.842 15.4 14.842H10.81L6.799 17.803ZM6.2 17H6.203H6.2Z" />
      </svg>
    </span>
  );
};

export default CommentIcon;
