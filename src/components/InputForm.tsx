import React from "react";
import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
}

const InputForm: React.FC<Props> = (props) => {
  const { name, label, type, placeholder, className, ...rest } = props;

  return (
    <div className={clsx("flex flex-col gap-y-1 w-full", className)} {...rest}>
      <label htmlFor={name} className="text-blueSky font-semibold text-sm lg:text-base">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b-[1px] border-gray-800 outline-0 pl-2 text-xs lg:text-sm py-2 focus:border-blueSky"
      />
    </div>
  );
};

export default InputForm;
