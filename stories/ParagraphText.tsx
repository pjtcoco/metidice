import React from "react";
interface ParagraphProps {
  children?: React.ReactNode;
  variant: "p1" | "p2-r" | "p2-b" | "p3-r" | "p3-b";
}

const ParagraphText: React.FC<ParagraphProps> = ({ children, variant }) => {
  return (
    <p className={`ensome__paragraph__${variant}`}>
      {children}
    </p>
  );
};

export default ParagraphText;
