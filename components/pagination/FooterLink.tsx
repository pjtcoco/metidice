import React from "react";
import { HeaderLinkProps } from "./HeaderLink";

const FooterLink: React.FC<HeaderLinkProps> = ({ active }) => {
  return (
    <a href="#" className={active ? `ensome__pagination__link--footer ensome__pagination__link--footer-active` : `ensome__pagination__link--footer`}>
      Home
    </a>
  );
};

export default FooterLink;
