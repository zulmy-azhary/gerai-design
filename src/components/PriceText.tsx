import React from "react";
import { Variants } from "../types";
import clsx from "clsx";

interface Props {
  variant: Variants;
}

const PriceText: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { variant, children } = props;
  
  return (
    <p
      className={clsx(
        "text-center flex justify-center",
        variant === "Primary" ? "text-gray-800" : "text-white"
      )}
    >
      <span className="text-xl md:text-2xl lg:text-3xl font-bold">{children}</span>
      <span className="inline-block font-bold text-sm md:text-base ml-1">K</span>
      <span className="text-xl md:text-2xl lg:text-3xl font-medium">/</span>
      <span className="md:text-lg lg:text-xl self-center tracking-wide font-bold">Project</span>
    </p>
  );
};

export default PriceText;
