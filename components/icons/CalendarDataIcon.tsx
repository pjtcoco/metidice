import React from "react";
import { IconProps } from "./props";

const CalendarDataIcon: React.FC<IconProps> = ({ color = "primary" }) => {
  return (
    <span className={`ensome__icon_data__${color}`}>
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5508 35.6998H21.0008V31.4998C21.0008 30.7626 21.1949 30.0383 21.5635 29.3998C21.9321 28.7614 22.4623 28.2312 23.1008 27.8626C23.7393 27.494 24.4636 27.2999 25.2008 27.2999C25.9381 27.2999 26.6623 27.494 27.3008 27.8626V23.0998C27.3008 21.9859 27.7433 20.9176 28.5309 20.13C29.3186 19.3423 30.3869 18.8998 31.5008 18.8998C32.6147 18.8998 33.683 19.3423 34.4706 20.13C35.2583 20.9176 35.7008 21.9859 35.7008 23.0998V14.6998H6.30078V30.4498C6.30078 31.8422 6.8539 33.1775 7.83847 34.1621C8.82304 35.1467 10.1584 35.6998 11.5508 35.6998ZM30.4508 6.2998C31.8432 6.2998 33.1785 6.85293 34.1631 7.83749C35.1477 8.82206 35.7008 10.1574 35.7008 11.5498V12.5998H6.30078V11.5498C6.30078 10.1574 6.8539 8.82206 7.83847 7.83749C8.82304 6.85293 10.1584 6.2998 11.5508 6.2998H30.4508ZM31.5008 20.9998C30.9438 20.9998 30.4097 21.2211 30.0159 21.6149C29.622 22.0087 29.4008 22.5428 29.4008 23.0998V37.7998C29.4008 38.3568 29.622 38.8909 30.0159 39.2847C30.4097 39.6786 30.9438 39.8998 31.5008 39.8998C32.0577 39.8998 32.5919 39.6786 32.9857 39.2847C33.3795 38.8909 33.6008 38.3568 33.6008 37.7998V23.0998C33.6008 22.5428 33.3795 22.0087 32.9857 21.6149C32.5919 21.2211 32.0577 20.9998 31.5008 20.9998ZM25.2008 29.3998C24.6438 29.3998 24.1097 29.6211 23.7159 30.0149C23.322 30.4087 23.1008 30.9428 23.1008 31.4998V37.7998C23.1008 38.3568 23.322 38.8909 23.7159 39.2847C24.1097 39.6786 24.6438 39.8998 25.2008 39.8998C25.7577 39.8998 26.2919 39.6786 26.6857 39.2847C27.0795 38.8909 27.3008 38.3568 27.3008 37.7998V31.4998C27.3008 30.9428 27.0795 30.4087 26.6857 30.0149C26.2919 29.6211 25.7577 29.3998 25.2008 29.3998ZM35.7008 27.2998C35.7008 26.7428 35.922 26.2087 36.3159 25.8149C36.7097 25.4211 37.2438 25.1998 37.8008 25.1998C38.3577 25.1998 38.8919 25.4211 39.2857 25.8149C39.6795 26.2087 39.9008 26.7428 39.9008 27.2998V37.7998C39.9008 38.3568 39.6795 38.8909 39.2857 39.2847C38.8919 39.6786 38.3577 39.8998 37.8008 39.8998C37.2438 39.8998 36.7097 39.6786 36.3159 39.2847C35.922 38.8909 35.7008 38.3568 35.7008 37.7998V27.2998Z" />
      </svg>
    </span>
  );
};

export default CalendarDataIcon;
