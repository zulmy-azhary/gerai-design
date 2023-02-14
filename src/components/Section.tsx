import clsx from "clsx";
import React from "react";

type Props = React.HTMLAttributes<HTMLElement>;

const Section: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <section className={clsx("", className)} {...rest}>
      {children}
    </section>
  );
};

export default Section;
