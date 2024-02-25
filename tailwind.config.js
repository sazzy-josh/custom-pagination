/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1026px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      inter: ["Inter", "sans"],
      source: ["Source Serif Pro", "serif"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        purple: {
          50: "#F4F3FF",
          100: "#EBE9FE",
          200: "#D9D6FE",
          300: "#BDB4FE",
          500: "#7A5AF8",
          700: "#5925DC",
          900: "#3E1C96",
        },
        gray: {
          50: "#F9FAFB",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          700: "#344054",
          900: "#101828",
          950: "#0C111D",
        },
      },
    },
  },
  plugins: [],
};
