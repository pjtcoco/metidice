import React from "react";
import { IconProps } from "./props";

const ArrowChevronLeftIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.707 4.29279C15.8945 4.48031 15.9998 4.73462 15.9998 4.99979C15.9998 5.26495 15.8945 5.51926 15.707 5.70679L9.41403 11.9998L15.707 18.2928C15.8892 18.4814 15.99 18.734 15.9877 18.9962C15.9854 19.2584 15.8803 19.5092 15.6948 19.6946C15.5094 19.88 15.2586 19.9852 14.9964 19.9875C14.7342 19.9897 14.4816 19.8889 14.293 19.7068L7.29303 12.7068C7.10556 12.5193 7.00024 12.265 7.00024 11.9998C7.00024 11.7346 7.10556 11.4803 7.29303 11.2928L14.293 4.29279C14.4806 4.10532 14.7349 4 15 4C15.2652 4 15.5195 4.10532 15.707 4.29279Z" />
      </svg>
    </span>
  );
};

export default ArrowChevronLeftIcon;
