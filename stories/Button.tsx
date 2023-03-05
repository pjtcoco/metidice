import DividerIcon from "@/components/icons/DividerIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import PlayCircleIcon from "@/components/icons/PlayCircleIcon";
import ShareIcon from "@/components/icons/Shareicon";
import React from "react";
interface ButtonProps {
  state: boolean;
}
const Button: React.FC<ButtonProps> = ({ state }) => {
  return (
    <div className="test">
      <button type="submit">Learn more</button>
      <MailIcon />
      <LocationIcon size="small" color="error" />
      <DividerIcon size="large" color="primary" />
      <PlayCircleIcon color="primary" />
      <ShareIcon size="large" color="error"/>
      <PersonIcon />
    </div>
  );
  //   <>
  //     <button type="submit">Learn more</button>;
  //     <DividerIcon/>
  //   </>
  // );
};

export default Button;
