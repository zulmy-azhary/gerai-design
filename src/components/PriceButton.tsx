import clsx from "clsx";
import React from "react";
import { Variants } from "../types";

interface Props {
  variant: Variants;
}

const PriceButton: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { variant, children } = props;

  return (
    <button
      className={clsx(
        "text-sm md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wide w-fit mx-auto px-6 py-2 rounded-xl mt-auto",
        variant === "Primary"
          ? "bg-gradient-to-r from-blueSky to-blueSky/75 text-white"
          : "bg-white text-blueSky"
      )}
    >
      {children}
    </button>
  );
};

export default PriceButton;
