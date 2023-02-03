/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre"],
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
    },
  },
  plugins: [require("flowbite/plugin")],
};
