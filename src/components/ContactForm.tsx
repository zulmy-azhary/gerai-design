import React from "react";
import { InputForm } from ".";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-y-8 bg-white min-h-[20rem] h-full px-8 md:px-10 xl:px-16 py-12 lg:py-16 md:pl-36 lg:pl-52 xl:pl-52 md:col-start-4 lg:col-start-3 col-span-full md:row-start-1">
      <h4 className="text-base md:text-lg text-gray-800 font-medium lg:text-2xl lg:font-semibold self-center md:self-start">
        Send a Message
      </h4>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-12 xl:gap-x-16 gap-y-6 lg:gap-y-12">
        <InputForm name="fullName" label="Your Name" type="text" placeholder="Enter your name" />
        <InputForm
          name="mobileNumber"
          label="Mobile Number"
          type="text"
          placeholder="Enter your mobile number"
        />
        <InputForm name="subject" label="Subject" type="text" placeholder="Enter your subject" />
        <InputForm
          name="emailAddress"
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
        />
        <InputForm
          name="messages"
          label="Your Message"
          type="textarea"
          placeholder="Write your message here"
          className="md:col-span-2"
        />
      </div>
      <button
        type="button"
        className="w-fit text-sm lg:text-base bg-blue-600 text-white px-7 py-3 rounded-xl self-center md:self-start"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
