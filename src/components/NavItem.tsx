import React from "react";
import clsx from "clsx";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavItem: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, className, href, ...rest } = props;

  return (
    <li>
      <a href={href} className={clsx("md:text-sm lg:text-base xl:text-xl tracking-wide font-medium", className)} {...rest}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
