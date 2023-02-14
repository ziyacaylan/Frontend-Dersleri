/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
      },
      backgroundImage: {
        bodyDefault: "url('./assets/backGroundImg_2.jpeg')",
      },
    },
  },
  plugins: [],
};
