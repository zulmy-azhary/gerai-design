import React from "react";
import { Variants } from "../types";
import clsx from "clsx";

interface Props {
  variant: Variants;
  benefits: string[];
}

const PriceBenefits: React.FC<Props> = (props) => {
  const { variant, benefits } = props;

  return (
    <div className="flex flex-col gap-y-1 lg:gap-y-2 items-center">
      {benefits.map((benefit, idx) => (
        <p
          key={idx}
          className={clsx(
            "text-sm md:text-lg lg:text-xl tracking-wider",
            variant === "Primary" ? "text-darkBlue" : "text-white"
          )}
        >
          {benefit}
        </p>
      ))}
    </div>
  );
};

export default PriceBenefits;
