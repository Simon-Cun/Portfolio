"use-client";
import { Link as Scroll } from "react-scroll";

type ScrollLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const ScrollLink = ({ to, children, ...props }: ScrollLinkProps) => {
  return (
    <Scroll
      to={to.replace("#", "")}
      smooth={true}
      duration={500}
      offset={-50}
      {...props}
    >
      {children}
    </Scroll>
  );
};

export default ScrollLink;
