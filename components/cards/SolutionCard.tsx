import React from "react";
import BookDatabaseIcon from "../icons/BookDatabaseIcon";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import CircleIcon from "../icons/CircleIcon";
import TextLink from "../pagination/TextLink";
import HeadlineText from "../text/HeadlineText";
import ParagraphText from "../text/ParagraphText";
import { CardProps } from "./DesktopCard";
import SolutionCardItem from "./SolutionCardItem";

type TodoPreview = Omit<CardProps, "variant">;
export type SolutionCardProps = TodoPreview & {
  variant?: "variant1" | "variant2" | "variant3";
};

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, variant = "variant2", title, children, url }) => {
  const condition = false;
  const arrowCondition = variant === "variant2" || variant === "variant3";

  return (
    <article className={`ensome__solutioncard__${variant}`}>
      {/* {children} */}
      {icon ?? <BookDatabaseIcon />}
      <HeadlineText variant="h4">{title ?? "Data integration"}</HeadlineText>
      <section>
        {children}
        {/* <ParagraphText variant="p2-r">Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.</ParagraphText> */}
        {/* <SolutionCardItem>Extract, transform, load (ETL)</SolutionCardItem>
        <SolutionCardItem>Extract, transform, load (ETL)</SolutionCardItem>
        <SolutionCardItem>Extract, transform, load (ETL)</SolutionCardItem>
        <SolutionCardItem>Extract, transform, load (ETL)</SolutionCardItem> */}
        {/* <div className="ensome__solutioncard__item">
          <CheckMarkIcon size="small" color="primary" />
          <ParagraphText variant="p2-r">{children ?? "Extract, transform, load (ETL)"}</ParagraphText>
        </div>
        <div className="ensome__solutioncard__item">
          <CheckMarkIcon size="small" color="primary" />
          <ParagraphText variant="p2-r">{children ?? "Extract, transform, load (ETL)"}</ParagraphText>
        </div>
        <div className="ensome__solutioncard__item">
          <CheckMarkIcon size="small" color="primary" />
          <ParagraphText variant="p2-r">{children ?? "Extract, transform, load (ETL)"}</ParagraphText>
        </div> */}
      </section>

      {/* <div className="ensome__solutioncard__item">
        <CheckMarkIcon color="primary" />
        <ParagraphText variant={condition ? "p3-r" : "p2-r"}>{children ?? "Extract, transform, load (ETL)"}</ParagraphText>
      </div>
      <div className="ensome__solutioncard__item">
        <CheckMarkIcon color="primary" />
        <ParagraphText variant={condition ? "p3-r" : "p2-r"}>{children ?? "Extract, transform, load (ETL)"}</ParagraphText>
      </div> */}
      {arrowCondition ? <TextLink hasArrow /> : <TextLink />}
      {/* <BrainCircuitIcon /> */}
      {/* {icon ?? <BrainCircuitIcon />} */}
      {/* <HeadlineText variant={condition ? "h5" : "h4"}>{title ?? "Machine Learning"}</HeadlineText>
  
    {arrowCondition && <TextLink hasArrow />} */}
    </article>
  );
};

export default SolutionCard;
