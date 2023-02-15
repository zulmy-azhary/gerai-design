import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const ServiceCard: React.FC<Props> = (props) => {
  const { title, description, className, ...rest } = props;
  const icon = title.split(" ").length > 1 ? title.split(" ").join("-") : title;

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-y-4 px-4 py-8 xl:py-10 rounded-lg shadow-[0_1px_15px_4px_rgba(0,0,0,0.17)] col-span-1 md:col-span-6 lg:col-span-4",
        className
      )}
      {...rest}
    >
      <div className="p-5 rounded-full bg-gradient-to-br from-[#227AFF] to-[#38D0E4]/70">
        <img src={`/assets/icons/icon-${icon.toLowerCase()}.svg`} className="w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12" />
      </div>
      <h3 className="text-darkBlue text-lg md:text-xl lg:text-2xl font-medium md:font-semibold">{title}</h3>
      <p className="text-center tracking-wide text-gray-800 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
