import React from "react";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import CircleIcon from "../icons/CircleIcon";
import ParagraphText from "../text/ParagraphText";
import { SolutionCardProps } from "./SolutionCard";
interface SolutionCardItemProps {
  bullet?: "circle" | "checkmark";
  children?: React.ReactNode;
}
const SolutionCardItem: React.FC<SolutionCardItemProps> = ({ bullet = "circle", children }) => {
  return (
    <div className="ensome__solutioncard__item">
      {bullet === "circle" ? <CircleIcon color="primary" /> : <CheckMarkIcon color="primary" />}
      <ParagraphText variant="p2-r">{children ?? "Extract, transform, load (ETL)"}</ParagraphText>
    </div>
  );
};

export default SolutionCardItem;
