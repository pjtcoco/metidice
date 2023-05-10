import React from "react";
export interface HeaderLinkProps {
  active: boolean;
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ active }) => {
  return (
    <a href="#" className={active ? `ensome__pagination__link--header ensome__pagination__link--header-active` : `ensome__pagination__link--header`}>
      Home
    </a>
    // <a href="#" className={`ensome__pagination__link--header`}>Home</a>
  );
};

export default HeaderLink;
