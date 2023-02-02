/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-dark": "#1abc9c",
        "green-light": "#2ecc71",
        "pink-dark": "#f53b57",
        "pink-light": "#f53b82",
        "grey-custom": "#F1F2F6",
      },
    },
  },
  plugins: [],
};
