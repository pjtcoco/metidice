import React from "react";
interface TabProps {
  size?: "small" | "medium" | "large";
  label: string;
  outlined?: boolean;
  color?: "primary" | "tertiary";
  onClick?: (x?: any) => void;
  id?: string;
}
const Tab: React.FC<TabProps> = ({ onClick, size = "medium", label, outlined = false, color, id }) => {
  const outline = outlined && size === "small";
  return (
    <button id={id} onClick={onClick} className={`ensome__pagination__tab-${size}${color ?? ""}${outline ? "-outlined" : ""}`}>
      {label}
    </button>
  );
};

export default Tab;
