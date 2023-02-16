import React from "react";
import { LogoText } from ".";
import heroImage from "/assets/img-hero.svg";

const Hero: React.FC = () => {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-10 before:bg-hero-mobile before:bg-cover before:bg-no-repeat before:bg-bottom md:before:bg-hero-desktop">
      <div className="translate-y-12 lg:translate-y-16 xl:translate-y-20 flex flex-col justify-end items-center gap-y-5 md:gap-y-6 h-full min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[80vh] max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <LogoText className=" flex gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl" />
        <p className="text-white text-center font-light text-sm tracking-normal md:tracking-wide md:text-lg lg:text-xl lg:mx-6 xl:text-3xl xl:mx-40">
          Website yang bergerak dibidang jasa Digital Marketing, Desain Grafis dan pembuatan Website
          untuk kebutuhan anda.
        </p>
        <button className="bg-white py-2 px-5 rounded-full text-blueSky tracking-wide text-sm md:text-base xl:text-2xl hover:bg-white/80">
          Contact Me
        </button>
        <img
          src={heroImage}
          alt="Hero Image Banner"
          className="max-w-xs object-contain md:max-w-lg lg:max-w-xl xl:max-w-2xl select-none"
        />
      </div>
    </section>
  );
};

export default Hero;
