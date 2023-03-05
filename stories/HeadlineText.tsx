import React from "react";
interface HeadlineProps {
  children?: React.ReactNode;
  // variant: string;
  variant: "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"h7-r"|"h7-b"|"h8";
}

const HeadlineText: React.FC<HeadlineProps> = ({ children, variant }) => {
  return (
    <h6 className={`headline__${variant}`}>
      Headline1
      {children}
    </h6>
  );
};

export default HeadlineText;
