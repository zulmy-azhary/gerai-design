import React from "react";
import { ContactInfoItem } from ".";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneForwarded } from "react-icons/fi";

const ContactInfo: React.FC = () => {
  return (
    <div className="grid top-0 lg:-left-10 xl:-left-32 h-full place-items-center md:col-start-1 col-span-full md:col-span-5 md:row-start-1 justify-self-start">
      <div className="bg-darkBlue brightness-125 text-white px-8 md:px-6 py-8 rounded-xl max-w-xs w-full flex flex-col gap-y-6 md:gap-y-10">
        <h5 className="font-semibold text-lg tracking-widest">Contact Information</h5>
        <ContactInfoItem icon={<SlLocationPin className="text-2xl self-start col-span-2" />}>
          Perum Telaga Murni, Jl. Semangka 1, Kab. Bekasi, Kec. Cikarang Barat 17530
        </ContactInfoItem>
        <ContactInfoItem icon={<AiOutlineMail className="text-2xl self-start col-span-2" />}>
          hgostline.gt@gmail.com
        </ContactInfoItem>
        <ContactInfoItem icon={<FiPhoneForwarded className="text-2xl self-start col-span-2" />}>
          0896-3124-2977
        </ContactInfoItem>
        <ul className="flex gap-x-5 items-center mt-6">
          {[GrFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
            <li key={idx}>
              <Icon className="text-2xl hover:brightness-75 cursor-pointer" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
