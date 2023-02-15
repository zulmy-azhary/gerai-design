import clsx from "clsx";
import React from "react";
import { PriceBenefits, PriceButton, PriceHeader, PriceText } from ".";
import { Variants } from "../types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: "Basic" | "Standard" | "Premium";
  variant: Variants;
  price: number;
  benefits: string[];
}

const PricingCard: React.FC<Props> = (props) => {
  const { name, variant, price, benefits, className, ...rest } = props;
  return (
    <div
      className={clsx(
        "md:col-span-6 xl:col-span-1 z-0 relative md:min-h-[30rem] h-full rounded-xl shadow-[0_5px_24px_2px_rgba(0,0,0,0.25)] px-8 py-8 md:py-10 flex flex-col gap-y-6 overflow-hidden before:absolute before:-z-10 before:inset-x-0 before:h-40 before:-top-16 md:before:-top-12 lg:before:-top-8",
        variant === "Primary"
          ? "before:bg-gradient-to-b before:from-blueSky before:to-blueSky/50 before:-skew-y-6"
          : "before:bg-img-pricing-secondary before:bg-cover before:bg-no-repeat before:bg-bottom bg-gradient-to-b from-blueSky to-blueSky/60",
        className
      )}
      {...rest}
    >
      <PriceHeader variant={variant}>{name}</PriceHeader>
      <div className="flex flex-col gap-y-6">
        <PriceText variant={variant}>{price}</PriceText>
        <PriceBenefits variant={variant} benefits={benefits} />
      </div>
      <PriceButton variant={variant}>Get This</PriceButton>
    </div>
  );
};

export default PricingCard;
