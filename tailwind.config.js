/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors: {
      primary: "#CC2D4A",
      secondary: "#8FA206",
      tertiary: "#61AEC9",

      white: "#fff",
      black: "#000",
      gray: "#9ca3af",
      white2: "#fffb",

      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"]
    },
    fontSize: {
      xl: "1.75rem",
      lg: "1.125rem",
      sm: "0.875rem",
    },
    extend: {
      backgroundImage: {
        fondoDesktop: "url('../img/desktop.jpg')",
        medellin: "url('../img/medellin.jpg')",
        bogota: "url('../img/bogota.jpg')",
        cartagena: "url('../img/cartagena.jpg')",
        barranquilla: "url('../img/barranquilla.jpg')",
        quindio: "url('../img/quindio.jpg')",
        cali: "url('../img/cali.jpg')",
        santaMarta: "url('../img/santaMarta.jpg')",
        hotelHilton: "url('../img/hotelHilton.jpg')",
        hotelDecameron: "url('../img/hotelDecameron.jpg')",
        hotelAngel: "url('../img/hotelAngel.jpg')",
        hotelArvi: "url('../img/hotelArvi.jpg')",
        norway: "url('../img/norway.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
    },
    // variants: {
    //   width: ["responsive", "hover", "focus"],
    // }
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
