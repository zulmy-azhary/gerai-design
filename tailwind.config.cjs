const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      backgroundImage: {
        "hero-desktop": "url('/assets/bg-hero-desktop.svg')",
        "hero-mobile": "url('/assets/bg-hero-mobile.svg')",
      },
      colors: {
        bluesky: "#0099FF",
      },
    },
  },
  plugins: [],
};
