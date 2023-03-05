import ArrowChevronDownIcon from "@/components/icons/ArrowChevronDownIcon";
import ArrowChevronLeftIcon from "@/components/icons/ArrowChevronLeftIcon";
import ArrowChevronRightIcon from "@/components/icons/ArrowChevronRightIcon";
import ArrowChevronUpIcon from "@/components/icons/ArrowChevronUpIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import BoardIcon from "@/components/icons/BoardIcon";
import CalenderIcon from "@/components/icons/CalenderIcon";
import CallIcon from "@/components/icons/CallIcon";
import CircleIcon from "@/components/icons/CircleIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import DataLineIcon from "@/components/icons/DataLineIcon";
import DismissIcon from "@/components/icons/DismissIcon";
import DividerIcon from "@/components/icons/DividerIcon";
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
import React from "react";
interface ButtonProps {
  state: boolean;
}
const Button: React.FC<ButtonProps> = ({ state }) => {
  return (
    <div className="test">
      <button type="submit">Learn more</button>
      <MailIcon />
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
      <ArrowChevronRightIcon />
      <CommentIcon />
      <ArrowChevronUpIcon />
      <DataLineIcon color="error" />
      <ArrowUpIcon color="error" />
      <NavigationIcon />
      <ArrowChevronLeftIcon color="primary" />
      <DismissIcon />
      <ArrowDownIcon size="small"/>
      <MinusIcon />
      <PlusIcon />
      <SearchIcon />
      {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.716 13.704C19.8973 13.5141 19.9966 13.2605 19.9925 12.998C19.9884 12.7355 19.8813 12.4852 19.6942 12.301C19.5071 12.1168 19.2551 12.0136 18.9926 12.0136C18.7301 12.0136 18.4781 12.1168 18.291 12.301L13.001 17.671V4C13.001 3.73478 12.8957 3.48043 12.7081 3.29289C12.5206 3.10536 12.2662 3 12.001 3C11.7358 3 11.4814 3.10536 11.2939 3.29289C11.1064 3.48043 11.001 3.73478 11.001 4V17.665L5.71401 12.3C5.52599 12.1206 5.27553 12.0214 5.01567 12.0235C4.75581 12.0256 4.50696 12.1288 4.32185 12.3112C4.13673 12.4935 4.02989 12.7408 4.02394 13.0006C4.018 13.2604 4.11343 13.5123 4.29001 13.703L11.112 20.628C11.2283 20.7459 11.3669 20.8396 11.5196 20.9035C11.6724 20.9674 11.8364 21.0003 12.002 21.0003C12.1676 21.0003 12.3316 20.9674 12.4844 20.9035C12.6372 20.8396 12.7757 20.7459 12.892 20.628L19.715 13.703L19.716 13.704Z"
          fill="#292D33"
        />
      </svg> */}
    </div>
  );
  //   <>
  //     <button type="submit">Learn more</button>;
  //     <DividerIcon/>
  //   </>
  // );
};

export default Button;
