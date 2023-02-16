import React from "react";
import { LogoText, NavItem } from ".";
import { useMediaQuery } from "../hooks/useMediaQuery";

const navItems = ["Abouts", "Pricing", "Services", "Contact"];

const Navbar: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto py-6 flex justify-between items-center">
        <LogoText className="text-white text-xl lg:text-2xl xl:text-3xl" />
        <aside>
          {isTablet && (
            <ul className="flex text-white md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
              {navItems.map((item) => (
                <NavItem key={item}>{item}</NavItem>
              ))}
            </ul>
          )}
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
