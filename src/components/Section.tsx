import clsx from "clsx";
import React from "react";
import { SubHeading } from ".";

interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { title, description, children, className, ...rest } = props;
  const [firstWord, lastWord] = title.split(" ");

  return (
    <section
      className={clsx("max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full", className)}
      {...rest}
    >
      <SubHeading variant="Primary" text={[firstWord, lastWord]} />
      <h3 className="text-sm md:text-base lg:text-lg xl:text-2xl font-medium tracking-wider mt-1 xl:mt-5 text-center text-gray-800">
        {description}
      </h3>
      {children}
    </section>
  );
};

export default Section;
