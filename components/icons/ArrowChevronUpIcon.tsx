import React from "react";
import { IconProps } from "./props";

const ArrowChevronUpIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.00012 12.8251C4.08383 12.9154 4.18451 12.9883 4.2964 13.0397C4.4083 13.0911 4.52922 13.1199 4.65226 13.1246C4.7753 13.1292 4.89805 13.1096 5.0135 13.0668C5.12895 13.024 5.23484 12.9588 5.32512 12.8751L10.0001 8.46636L14.6751 12.8751C14.7654 12.9588 14.8713 13.0239 14.9867 13.0667C15.1022 13.1095 15.2249 13.1292 15.348 13.1245C15.471 13.1199 15.5919 13.0911 15.7038 13.0397C15.8157 12.9883 15.9164 12.9154 16.0001 12.8251C16.0838 12.7348 16.149 12.6289 16.1917 12.5135C16.2345 12.398 16.2542 12.2753 16.2495 12.1523C16.2449 12.0292 16.2161 11.9083 16.1647 11.7964C16.1133 11.6845 16.0404 11.5838 15.9501 11.5001L10.6376 6.50011C10.4643 6.33934 10.2366 6.25 10.0001 6.25C9.76368 6.25 9.53598 6.33934 9.36262 6.50011L4.05012 11.5001C3.95982 11.5838 3.88691 11.6845 3.83553 11.7964C3.78414 11.9083 3.75531 12.0292 3.75067 12.1523C3.74602 12.2753 3.76566 12.398 3.80846 12.5135C3.85127 12.6289 3.91639 12.7348 4.00012 12.8251Z" />
      </svg>
    </span>
  );
};

export default ArrowChevronUpIcon;
