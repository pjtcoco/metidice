import ParagraphText from "@/components/text/ParagraphText";
import React from "react";
import BrainCircuitIcon from "../icons/BrainCircuitIcon";
import TextLink from "../pagination/TextLink";
import HeadlineText from "../text/HeadlineText";
export interface CardProps {
  icon?: React.ReactNode;
  variant?: "variant1" | "variant2" | "variant3" | "variant4";
  title: string;
  children?: React.ReactNode;
  url?: string;
  type?:"list"|"text"
}
const DesktopCard: React.FC<CardProps> = ({ icon, variant = "variant2", title, children, url }) => {
  const condition = variant === "variant4";
  const arrowCondition = variant === "variant2" || variant === "variant3";

  return (
    <article className={`ensome__desktopcard__${variant}`}>
      {/* {children} */}

      {/* <BrainCircuitIcon /> */}
      {icon ?? <BrainCircuitIcon />}
      <HeadlineText variant={condition ? "h5" : "h4"}>{title ?? "Machine Learning"}</HeadlineText>
      <ParagraphText variant={condition ? "p3-r" : "p2-r"}>
        {children ?? "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo."}
      </ParagraphText>
      {arrowCondition && <TextLink hasArrow />}
    </article>
  );
};

export default DesktopCard;
