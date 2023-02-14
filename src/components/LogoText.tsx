import React from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLElement>;

const LogoText: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h1 className={clsx("tracking-widest", className)} {...rest}>
      <span className="font-semibold">Gerai</span>
      <span>Design</span>
    </h1>
  );
};

export default LogoText;
