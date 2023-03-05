import React from "react";
import { IconProps } from "./props";

const FacebookIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_56_1739)">
          <path d="M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM14.7293 8.44078H12.9977C12.7925 8.44078 12.5645 8.71078 12.5645 9.06958V10.32H14.7305L14.4029 12.1032H12.5645V17.4564H10.5209V12.1032H8.66687V10.32H10.5209V9.27118C10.5209 7.76638 11.5649 6.54358 12.9977 6.54358H14.7293V8.44078Z" />
        </g>
        <defs>
          <clipPath id="clip0_56_1739">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default FacebookIcon;
