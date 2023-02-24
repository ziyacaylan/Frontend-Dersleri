/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        linkedin: "#0072b1",
      },
    },
  },
  plugins: [],
};
