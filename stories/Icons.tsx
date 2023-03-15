import ArrowChevronDownIcon from "@/components/icons/ArrowChevronDownIcon";
import ArrowChevronLeftIcon from "@/components/icons/ArrowChevronLeftIcon";
import ArrowChevronRightIcon from "@/components/icons/ArrowChevronRightIcon";
import ArrowChevronUpIcon from "@/components/icons/ArrowChevronUpIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ArrowTrendingLinesIcon from "@/components/icons/ArrowTrendingLinesIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import BehanceIcon from "@/components/icons/BehanceIcon";
import BoardIcon from "@/components/icons/BoardIcon";
import BookDatabaseIcon from "@/components/icons/BookDatabaseIcon";
import BotIcon from "@/components/icons/BotIcon";
import BrainCircuitIcon from "@/components/icons/BrainCircuitIcon";
import CalendarDataIcon from "@/components/icons/CalendarDataIcon";
import CalenderIcon from "@/components/icons/CalenderIcon";
import CallIcon from "@/components/icons/CallIcon";
import CircleIcon from "@/components/icons/CircleIcon";
import ClipboardDataIcon from "@/components/icons/ClipboardDataIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import DataAreaIcon from "@/components/icons/DataAreaIcon";
import DataLineIcon from "@/components/icons/DataLineIcon";
import DataPieIcon from "@/components/icons/DataPieIcon";
import DataWhiskerIcon from "@/components/icons/DataWhiskerIcon";
import DatabaseIcon from "@/components/icons/DatabaseIcon";
import DismissIcon from "@/components/icons/DismissIcon";
import DividerIcon from "@/components/icons/DividerIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import IsometricBot3DIcon from "@/components/icons/IsometricBot3DIcon";
import IsometricBotIcon from "@/components/icons/IsometricBotIcon";
import IsometricBrain3DIcon from "@/components/icons/IsometricBrain3DIcon";
import IsometricBrainIcon from "@/components/icons/IsometricBrainIcon";
import IsometricDataAreaLien3DIcon from "@/components/icons/IsometricDataAreaLien3DIcon";
import IsometricDataAreaLienIcon from "@/components/icons/IsometricDataAreaLienIcon";
import IsometricDataPie3DIcon from "@/components/icons/IsometricDataPie3DIcon";
import IsometricDataPieIcon from "@/components/icons/IsometricDataPieIcon";
import IsometricKey3DIcon from "@/components/icons/IsometricKey3DIcon";
import IsometricKeyIcon from "@/components/icons/IsometricKeyIcon";
import IsometricTrendingLines3DIcon from "@/components/icons/IsometricTrendingLines3DIcon";
import IsometricTrendingLinesIcon from "@/components/icons/IsometricTrendingLinesIcon";
import KeyIcon from "@/components/icons/KeyIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import LocationIcon from "@/components/icons/LocationIcon";
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
const Icons: React.FC<ButtonProps> = ({ state }) => {
  return (
    <div className="test">
      <LocationIcon color="error" />
      <DividerIcon color="primary" />
      <TagIcon />
      <PlayCircleIcon color="error" />
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
      <ArrowDownIcon size="small" />
      <MinusIcon />
      <PlusIcon />
      <SearchIcon />
      <TimelineDesktopIcon />
      <TimelineMobileIcon />
      <BehanceIcon />
      <DribbleIcon color="error" />
      <FacebookIcon />
      <GoogleIcon />
      <LinkedinIcon color="error" />
      <TwitterIcon />
      <YoutubeIcon color="error" />
      <ArrowTrendingLinesIcon />
      <BookDatabaseIcon />
      <BotIcon />
      <BrainCircuitIcon />
      <CalendarDataIcon />
      <ClipboardDataIcon />
      <DataAreaIcon />
      <DataPieIcon />
      <DataWhiskerIcon />
      <DatabaseIcon />
      <KeyIcon />
      <IsometricBotIcon />
      <IsometricBot3DIcon />
      <IsometricBrainIcon />
      <IsometricBrain3DIcon />
      <IsometricDataAreaLienIcon />
      <IsometricDataAreaLien3DIcon />
      <IsometricDataPieIcon />
      <IsometricDataPie3DIcon />
      <IsometricKeyIcon />
      <IsometricKey3DIcon />
      <IsometricTrendingLinesIcon />
      <IsometricTrendingLines3DIcon />
    </div>
  );
  //   <>
  //     <button type="submit">Learn more</button>;
  //     <DividerIcon/>
  //   </>
  // );
};

export default Icons;
