import ParagraphText from "@/components/text/ParagraphText";
import { nano } from "app/[locale]/layout";
import Image from "next/image";
import React from "react";
import Tag from "../pagination/Tag";
import TextLink from "../pagination/TextLink";
import HeadlineText from "../text/HeadlineText";
import { CardProps } from "./DesktopCard";
import photo from 'public/images/v1.png'
interface BlogCardProps extends CardProps {
  type?: "variant1" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6";
  date: string;
  hasArrow?: boolean;
  hasTags?: boolean;
  tags?: string[];
  imageSrc?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({imageSrc, hasArrow, tags, hasTags, date, type = "variant2", title, children, url }) => {
  const condition6 = type === "variant6" ||  type === "variant2" && tags?.length;
  const arrowCondition = type === "variant2" || type === "variant3";
  return (
    <article className={`ensome__blogcard__${type}`}>
      {type !== "variant6" && <Image src={imageSrc??photo} alt="card_image" id="card_image" width={100} height={100}/>}
      <section>
        {/* <span>image</span> */}
        <ParagraphText variant={"p3-r"}>{date ?? "22 June 2022"}</ParagraphText>
        {/* <ParagraphText variant={condition ? "p3-r" : "p2-r"}>{date ?? "22 June 2022"}</ParagraphText> */}
        <HeadlineText variant={"h4"}>{title ?? "Sed ut perspiciatis unde omnis at vero blanditils"}</HeadlineText>
        {/* <HeadlineText variant={condition ? "h5" : "h4"}>{title ?? "Machine Learning"}</HeadlineText> */}
        {children && (
          <ParagraphText variant={"p2-r"}>
            {/* <ParagraphText variant={condition ? "p3-r" : "p2-r"}> */}
            {children}
            {/* {children ?? "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."} */}
          </ParagraphText>
        )}

        {hasArrow && <TextLink hasArrow />}
      </section>

      {hasTags && <TextLink hasArrow />}
      <div>{condition6 && tags?.map((tag) => <Tag label={tag} key={nano()} />)}</div>
    </article>
  );
};

export default BlogCard;
