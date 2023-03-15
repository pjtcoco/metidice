import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
interface TextLinkProps {
  hasArrow?: boolean;
  disabled: boolean
}
const TextLink:React.FC<TextLinkProps> = ({hasArrow = false,disabled=false}) => {
  return (
    <button className="ensome__pagination__link" disabled={disabled}>
      <span>Read more</span>
      {hasArrow && <ArrowRightIcon size="small" />}
    </button>
  );
};

export default TextLink;
