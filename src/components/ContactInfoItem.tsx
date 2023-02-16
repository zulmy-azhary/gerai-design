import React from "react";

interface Props {
  icon: React.ReactNode;
}

const ContactInfoItem: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { icon, children } = props;

  return (
    <div className="grid grid-cols-12">
      {icon}
      <p className="text-xs xl:text-sm font-extralight tracking-widest col-span-10">{children}</p>
    </div>
  );
};

export default ContactInfoItem;
