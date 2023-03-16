import ParagraphText from "@/components/text/ParagraphText";
import React from "react";
import BrainCircuitIcon from "../icons/BrainCircuitIcon";
import TextLink from "../pagination/TextLink";
import HeadlineText from "../text/HeadlineText";
import { CardProps } from "./DesktopCard";
interface BlogCardProps extends CardProps {
  type?: "variant1" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6";
}

const BlogCard: React.FC<BlogCardProps> = ({ icon, type = "variant2", title, children, url }) => {
  const condition = type === "variant4";
  const arrowCondition = type === "variant2" || type === "variant3";
  return (
    <article className={`ensome__blogcard__${type}`}>

      {icon ?? <BrainCircuitIcon />}
      <HeadlineText variant={condition ? "h5" : "h4"}>{title ?? "Machine Learning"}</HeadlineText>
      <ParagraphText variant={condition ? "p3-r" : "p2-r"}>
        {children ?? "At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo."}
      </ParagraphText>
      {arrowCondition && <TextLink hasArrow />}
    </article>
  );
};

export default BlogCard;
