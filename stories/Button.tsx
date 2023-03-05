import ArrowChevronDownIcon from "@/components/icons/ArrowChevronDownIcon";
import ArrowChevronLeftIcon from "@/components/icons/ArrowChevronLeftIcon";
import ArrowChevronRightIcon from "@/components/icons/ArrowChevronRightIcon";
import ArrowChevronUpIcon from "@/components/icons/ArrowChevronUpIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import BehanceIcon from "@/components/icons/BehanceIcon";
import BoardIcon from "@/components/icons/BoardIcon";
import CalenderIcon from "@/components/icons/CalenderIcon";
import CallIcon from "@/components/icons/CallIcon";
import CircleIcon from "@/components/icons/CircleIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import DataLineIcon from "@/components/icons/DataLineIcon";
import DismissIcon from "@/components/icons/DismissIcon";
import DividerIcon from "@/components/icons/DividerIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import NavigationIcon from "@/components/icons/NavigationIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import PlayCircleIcon from "@/components/icons/PlayCircleIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import ShareIcon from "@/components/icons/Shareicon";
import TagIcon from "@/components/icons/TagIcon";
import TimelineDesktopIcon from "@/components/icons/TimelineDesktopIcon";
import TimelineMobileIcon from "@/components/icons/TimelineMobileIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import React from "react";
interface ButtonProps {
  state: boolean;
}
const Button: React.FC<ButtonProps> = ({ state }) => {
  return (
    <div className="test">
      {/* <button type="submit">Learn more</button> */}
      {/* <MailIcon />
      <LocationIcon color="error" />
      <DividerIcon color="primary" />
      <TagIcon />
      <PlayCircleIcon color="primary" />
      <ShareIcon color="error" />
      <PersonIcon />
      <CalenderIcon />
      <ArrowLeftIcon />
      <BoardIcon />
      <ArrowRightIcon />
      <CallIcon />
      <ArrowChevronDownIcon />
      <CircleIcon />
      <ArrowChevronRightIcon /> */}
      {/* <CommentIcon />
      <ArrowChevronUpIcon />
      <DataLineIcon color="error" />
      <ArrowUpIcon color="error" />
      <NavigationIcon />
      <ArrowChevronLeftIcon color="primary" />
      <DismissIcon />
      <ArrowDownIcon size="small" /> */}
      <MinusIcon />
      <PlusIcon />
      <SearchIcon />
      <TimelineDesktopIcon />
      <TimelineMobileIcon />
      <BehanceIcon />
      <DribbleIcon color="error"/>
      <FacebookIcon/>
      <GoogleIcon/>
      <LinkedinIcon color="error"/>
      <TwitterIcon/>
      <YoutubeIcon color="error"/>
     
    </div>
  );
  //   <>
  //     <button type="submit">Learn more</button>;
  //     <DividerIcon/>
  //   </>
  // );
};

export default Button;
