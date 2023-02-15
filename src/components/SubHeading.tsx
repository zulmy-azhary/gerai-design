import clsx from "clsx";
import React from "react";
import { Variants } from "../types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  text: [string, string];
  variant?: Variants;
}

const SubHeading: React.FC<Props> = (props) => {
  const { text, variant, className, ...rest } = props;

  return (
    <h2
      className={clsx(
        "text-xl md:text-3xl xl:text-4xl flex justify-center items-center gap-x-3 tracking-wider",
        variant === "Primary" && "text-darkBlue",
        variant === "Secondary" && "text-white",
        className
      )}
      {...rest}
    >
      <span className={clsx(variant === "Primary" ? "font-bold" : "font-medium")}>{text[0]}</span>
      <span className="font-medium">{text[1]}</span>
    </h2>
  );
};

export default SubHeading;
