import React from "react";
import { ContactForm, ContactInfo, SubHeading } from ".";

const Contact: React.FC = () => {
  return (
    <section className="mt-12 relative z-0 before:absolute before:-z-20 before:inset-0 before:bg-contact before:bg-center before:bg-no-repeat before:bg-cover py-12 md:py-20 after:absolute after:inset-0 after:-z-10 after:mix-blend-overlay after:bg-gradient-to-b after:from-[#227AFF]/90 after:via-[#227AFF]/90 after:to-[#5FD5FB]">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full flex flex-col gap-y-8 md:gap-y-12 min-h-[30rem]">
        <SubHeading variant="Secondary" text={["Contact", "Us"]} />
        <div className="relative grid grid-cols-12 gap-y-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
