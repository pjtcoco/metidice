import React from "react";
interface TabProps {
  size: "small" | "medium" | "large";
  label: string;
  outlined: boolean;
  color?: "primary" | "tertiary";
}
const Tab: React.FC<TabProps> = ({ size = "medium", label, outlined = false, color }) => {
  const outline = outlined && size === "small";
  console.log(outline);
  return <button className={`ensome__pagination__tab-${size}${color??""}${outline ? "-outlined" : ""}`}>{label}</button>;
};

export default Tab;
