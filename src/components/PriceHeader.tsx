import clsx from "clsx";
import React from "react";
import { Variants } from "../types";

interface Props {
  variant: Variants;
}

const PriceHeader: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { variant, children } = props;
  return (
    <h4
      className={clsx(
        "uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold tracking-widest basis-16 md:basis-20 lg:basis-24",
        variant === "Primary" ? "text-white" : "text-blueSky"
      )}
    >
      {children}
    </h4>
  );
};

export default PriceHeader;
