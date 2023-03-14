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
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import CircleIcon from "@/components/icons/CircleIcon";
import ClipboardDataIcon from "@/components/icons/ClipboardDataIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import DataAreaIcon from "@/components/icons/DataAreaIcon";
import DatabaseIcon from "@/components/icons/DatabaseIcon";
import DataLineIcon from "@/components/icons/DataLineIcon";
import DataPieIcon from "@/components/icons/DataPieIcon";
import DataWhiskerIcon from "@/components/icons/DataWhiskerIcon";
import DismissIcon from "@/components/icons/DismissIcon";
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
import type { Meta, StoryObj } from "@storybook/react";

import Icons from "./Icons";
import MailIcon from "./MailIcon";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Icons> = {
  title: "Ensome/Components/Icons",
  component: Icons,
  tags: ["autodocs"],
  // subcomponents:{MailIcon}
};

export default meta;
type Story = StoryObj<typeof Icons>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const All: Story = {
 args:{}
 
};
export const ArrowChevronDown: Story = {
  render: () => <ArrowChevronDownIcon/>
};
export const ArrowChevronLeft: Story = {
  render: () => <ArrowChevronLeftIcon/>
};
export const ArrowChevronRight: Story = {
  render: () => <ArrowChevronRightIcon/>
};
export const ArrowChevronUp: Story = {
  render: () => <ArrowChevronUpIcon/>
};
export const ArrowDown: Story = {
  render: () => <ArrowDownIcon/>
};
export const ArrowLeft: Story = {
  render: () => <ArrowLeftIcon/>
};
export const ArrowRight: Story = {
  render: () => <ArrowRightIcon/>
};
export const ArrowTrendingLines: Story = {
  render: () => <ArrowTrendingLinesIcon/>
};
export const ArrowUp: Story = {
  render: () => <ArrowUpIcon/>
};
export const Behance: Story = {
  render: () => <BehanceIcon/>
};
export const Board: Story = {
  render: () => <BoardIcon/>
};
export const BookDatabase: Story = {
  render: () => <BookDatabaseIcon/>
};
export const Bot: Story = {
  render: () => <BotIcon/>
};
export const BrainCircuit: Story = {
  render: () => <BrainCircuitIcon/>
};
export const CalendarData: Story = {
  render: () => <CalendarDataIcon/>
};
export const Calender: Story = {
  render: () => <CalenderIcon/>
};
export const Call: Story = {
  render: () => <CallIcon/>
};
export const CheckMark: Story = {
  render: () => <CheckMarkIcon/>
};
export const Circle: Story = {
  render: () => <CircleIcon/>
};
export const ClipboardData: Story = {
  render: () => <ClipboardDataIcon/>
};
export const Comment: Story = {
  render: () => <CommentIcon/>
};
export const DataArea: Story = {
  render: () => <DataAreaIcon/>
};
export const Database: Story = {
  render: () => <DatabaseIcon/>
};
export const DataLine: Story = {
  render: () => <DataLineIcon/>
};
export const DataPie: Story = {
  render: () => <DataPieIcon/>
};
export const DataWhisker: Story = {
  render: () => <DataWhiskerIcon/>
};
export const Dismiss: Story = {
  render: () => <DismissIcon/>
};
export const Dribble: Story = {
  render: () => <DribbleIcon/>
};
export const Facebook: Story = {
  render: () => <FacebookIcon/>
};
export const Google: Story = {
  render: () => <GoogleIcon/>
};
export const IsometricBot3D: Story = {
  render: () => <IsometricBot3DIcon/>
};
export const IsometricBot: Story = {
  render: () => <IsometricBotIcon/>
};
export const IsometricBrain3D: Story = {
  render: () => <IsometricBrain3DIcon/>
};
export const IsometricBrain: Story = {
  render: () => <IsometricBrainIcon/>
};
export const IsometricDataAreaLien3D: Story = {
  render: () => <IsometricDataAreaLien3DIcon/>
};
export const IsometricDataAreaLien: Story = {
  render: () => <IsometricDataAreaLienIcon/>
};
export const IsometricDataPie3D: Story = {
  render: () => <IsometricDataPie3DIcon/>
};
export const IsometricDataPie: Story = {
  render: () => <IsometricDataPieIcon/>
};
export const IsometricKey3D: Story = {
  render: () => <IsometricKey3DIcon/>
};
export const IsometricKey: Story = {
  render: () => <IsometricKeyIcon/>
};
export const IsometricTrendingLines3D: Story = {
  render: () => <IsometricTrendingLines3DIcon/>
};
export const IsometricTrendingLines: Story = {
  render: () => <IsometricTrendingLinesIcon/>
};
// export const IsometricTrendingLines: Story = {
//   render: () => <IsometricTrendingLinesIcon/>
// };
export const Key: Story = {
  render: () => <KeyIcon/>
};
export const Linkedin: Story = {
  render: () => <LinkedinIcon/>
};
export const Location: Story = {
  render: () => <LocationIcon/>
};
export const Mail: Story = {
  render: () => <MailIcon/>
};
export const Minus: Story = {
  render: () => <MinusIcon/>
};
export const Navigation: Story = {
  render: () => <NavigationIcon/>
};
export const Person: Story = {
  render: () => <PersonIcon/>
};
export const PlayCircle: Story = {
  render: () => <PlayCircleIcon/>
};
export const Plus: Story = {
  render: () => <PlusIcon/>
};
export const Search: Story = {
  render: () => <SearchIcon/>
};
export const Share: Story = {
  render: () => <ShareIcon/>
};
export const Tag: Story = {
  render: () => <TagIcon/>
};
export const TimelineDesktop: Story = {
  render: () => <TimelineDesktopIcon/>
};
export const TimelineMobile: Story = {
  render: () => <TimelineMobileIcon/>
};
export const Twitter: Story = {
  render: () => <TwitterIcon/>
};
export const Youtube: Story = {
  render: () => <YoutubeIcon/>
};

