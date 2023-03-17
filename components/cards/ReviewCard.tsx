import React from "react";
import HeadlineText from "../text/HeadlineText";
import ParagraphText from "../text/ParagraphText";
import photo from 'public/images/rcard.png'
import Image from "next/image";

interface ReviewCardProps {
  title: string;
  name: string;
  imageSrc?: string;
  type: "variant1" | "variant2";
}
const ReviewCard: React.FC<ReviewCardProps> = ({ imageSrc,type, title, name }) => {
  return (
    <section className={`ensome__reviewcard__${type}`}>
      <Image src={imageSrc??photo} alt="card_image" id="rcard_image" width={100} height={100}/>
      <ParagraphText variant={"p2-r"}>
        “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
        velit esse quam nihil molestiae consequatur, vel illum.”
      </ParagraphText>
      <div className={`ensome__reviewcard__${type}_info`}>
        <HeadlineText variant={"h6"}>{name ?? "Alex Bern"}</HeadlineText>
        <HeadlineText variant={"h7-r"}>{title ?? "CEO by PixelPerfect"}</HeadlineText>
      </div>
    </section>
  );
};

export default ReviewCard;
