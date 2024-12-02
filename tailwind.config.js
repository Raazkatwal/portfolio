/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "serif"],
      },
      colors: {
        accent: "#00FE9B",
        background: "#1D1C22",
      },
    },
  },
  plugins: [],
};
