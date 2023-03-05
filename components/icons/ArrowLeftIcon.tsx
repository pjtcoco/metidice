import React from "react";
import { IconProps } from "./props";

const ArrowLeftIcon: React.FC<IconProps> = ({ size = "medium", color = "black" }) => {
  return (
    <span className={`ensome__icon_${size}__${color}`}>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.2501C2.99979 10.1373 3.02461 10.0259 3.07269 9.92389C3.12076 9.82186 3.19089 9.73178 3.278 9.66014L6.224 6.72014C6.36463 6.57969 6.55525 6.5008 6.754 6.5008C6.95275 6.5008 7.14338 6.57969 7.284 6.72014C7.35348 6.7896 7.4086 6.87207 7.44621 6.96283C7.48381 7.0536 7.50317 7.15089 7.50317 7.24914C7.50317 7.34738 7.48381 7.44467 7.44621 7.53544C7.4086 7.62621 7.35348 7.70867 7.284 7.77814L5.566 9.50014L16.25 9.50014C16.4489 9.50014 16.6397 9.57915 16.7803 9.71981C16.921 9.86046 17 10.0512 17 10.2501C17 10.449 16.921 10.6398 16.7803 10.7805C16.6397 10.9211 16.4489 11.0001 16.25 11.0001L5.556 11.0001L7.289 12.7221C7.35863 12.7916 7.41388 12.8741 7.45157 12.965C7.48927 13.0559 7.50867 13.1533 7.50867 13.2516C7.50867 13.35 7.48927 13.4474 7.45157 13.5383C7.41388 13.6291 7.35863 13.7117 7.289 13.7811C7.21935 13.8508 7.13665 13.9061 7.04562 13.9438C6.9546 13.9816 6.85703 14.001 6.7585 14.001C6.65997 14.001 6.5624 13.9816 6.47138 13.9438C6.38035 13.9061 6.29765 13.8508 6.228 13.7811L3.22 10.7771C3.14979 10.7086 3.09413 10.6266 3.05633 10.536C3.01853 10.4455 2.99937 10.3483 3 10.2501Z" />
      </svg>
    </span>
  );
};

export default ArrowLeftIcon;
