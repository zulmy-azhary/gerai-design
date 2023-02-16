import React from "react";
import { LogoText } from ".";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full py-8 grid grid-cols-1 gap-y-5 md:grid-cols-12 justify-items-center md:justify-items-start place-items-center">
        <LogoText className="text-3xl text-gray-800 md:col-span-6 lg:col-span-4 lg:self-start" />
        <div className="text-center md:row-start-2 lg:row-start-auto md:text-start md:col-span-5 md:self-start">
          <p className="text-lg tracking-wider font-medium uppercase">About</p>
          <p className="text-sm">
            Website jasa digital marketing, design grafis dan pembuatan website
          </p>
        </div>
        <ul className="col-span-1 md:col-span-6 lg:col-span-3 flex gap-x-4 justify-between md:justify-self-end md:row-span-2 lg:row-start-auto">
          {[GrFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
            <li key={idx}>
              <Icon className="text-3xl text-gray-800 cursor-pointer" />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blueSky py-5">
        <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full flex flex-col gap-y-5 md:flex-row text-center md:text-start justify-between text-white tracking-widest text-sm">
          <p>&copy;Copyright GeraiDesign 2023</p>
          <ul className="flex flex-col md:flex-row md:justify-end gap-x-6 lg:gap-x-0 lg:justify-between basis-1/2 lg:basis-1/3">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
