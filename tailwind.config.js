/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark_blue_Color: "#155e75",
        Green_Color: "#14532d",
        White_Color: "#ffffff",
      },
      fontFamily: {
        "inter-tight": ["Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};