import React from "react";
import Tab from "./Tab";
interface TasbSwitchProps {
  size?: "medium" | "large";
}
const TabSwitch: React.FC<TasbSwitchProps> = ({ size = "medium" }) => {
  const handleSwitch = (e: Event) => {
    // setActive(active ? false : true);
    const el = e.target as HTMLButtonElement;
    console.log("has?: ", e);
    if (el.id === "switch1" && activeOne === true && activeTwo === true) {
    }
    if (el.id === "switch1" && activeOne === false && activeTwo === false) {
      setActiveOne(true);
      setActiveTwo(true);
    }
    if (el.id === "switch2" && activeOne === true && activeTwo === true) {
      setActiveOne(false);
      setActiveTwo(false);
    }
    if (el.id === "switch1" && activeOne === true && activeTwo === false) {
      setActiveOne(false);
      setActiveTwo(true);
    }
    // if (el.className.includes("primary")) {
    //   setActiveOne(true);
    // }
  };
  const [activeOne, setActiveOne] = React.useState(true);
  const [activeTwo, setActiveTwo] = React.useState(true);
  return (
    <div className={`ensome__pagination__switch-${size}`}>
      <Tab label="Monthly" id="switch1" size={size} onClick={handleSwitch} color={activeOne ? "primary" : "tertiary"} />
      <Tab label="Monthly" id="switch2" size={size} onClick={handleSwitch} color={activeTwo ? "tertiary" : "primary"} />
    </div>
  );
};

export default TabSwitch;
