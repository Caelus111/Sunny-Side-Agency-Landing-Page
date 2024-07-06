const { turquoise, white } = require("color-name");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        SoftRed: " hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkDesaturatedCyan: "hsl(167, 40%, 24%)",
        desaturatedCyan:"hsl(167, 44%, 70%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        DarkModerateCyan: "hsl(168, 34%, 41%)",
        VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        DarkGrayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
