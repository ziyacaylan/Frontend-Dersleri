/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      purple: colors.purple,
      slate: colors.slate,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      sky: colors.sky,
      violent: colors.violent,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      linkedin: "#0072b1",
      backgroundYellow: "#FFCD38",
      paperYellow: "#FFDE67",
      boxYellow: "#FFEEB4",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
