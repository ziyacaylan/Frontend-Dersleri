/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkMain: "#262626",
        darkAside: "#000E21",
        darkHeader: "#182A39",
        darkInput: "#5B6770",
        headerBlue: "#D7DEFA",
        inputBlue: "#4D9CCF",
      },
      fontFamily: {
        gemunu: ["Gemunu Libre"],
      },
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   black: colors.black,
    //   purple: colors.purple,
    //   slate: colors.slate,
    //   white: colors.white,
    //   gray: colors.trueGray,
    //   indigo: colors.indigo,
    //   red: colors.rose,
    //   yellow: colors.amber,
    //   blue: colors.blue,
    //   sky: colors.sky,
    //   violent: colors.violent,
    //   pink: colors.pink,
    //   fuchsia: colors.fuchsia,
    //   linkedin: "#0072b1",
    //   headerBlue: "#D7DEFA",
    // },
  },
  plugins: [],
};
