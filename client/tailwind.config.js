const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "mobile-s": { max: "321px" },
      "mobile-m": { max: "376px" },
      "mobile-l": { max: "426px" },
      "tablet": { max: "769px" },
      ...defaultTheme.screens,
    },
    fontFamily: {
      brand: ["Staatliches", "cursive"],
      login: ["Noto Serif Display", "serif"],
    },
    extend: {
      colors: {
        persiangreen: "#2A9D8F", //animal button blue
        darkgray: "#275C62", //hover button blue
        charcoal: "#264653", //background
        maizecrayola: "#E9C46A", //accent color
        sandybrown: "#F4A261", //button color
        burntsienna: "#E76F51", //animal button red
        auburn: "#9E2A2B", //hover button red
        HeliotropeGray: "#734F5A", //border color
        antiquewhite: "#faebd7", //login animation color
      },
    },
  },
  plugins: [],
};
