import React from "react";
import { IconProps } from "./props";

const YoutubeIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_56_1742)">
          <path d="M13.9241 11.7996L11.2289 10.542C10.9937 10.4328 10.8005 10.5552 10.8005 10.8156V13.1844C10.8005 13.4448 10.9937 13.5672 11.2289 13.458L13.9229 12.2004C14.1593 12.09 14.1593 11.91 13.9241 11.7996ZM12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM12.0005 16.68C6.10367 16.68 6.00047 16.1484 6.00047 12C6.00047 7.85158 6.10367 7.31998 12.0005 7.31998C17.8973 7.31998 18.0005 7.85158 18.0005 12C18.0005 16.1484 17.8973 16.68 12.0005 16.68Z" />
        </g>
        <defs>
          <clipPath id="clip0_56_1742">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default YoutubeIcon;
