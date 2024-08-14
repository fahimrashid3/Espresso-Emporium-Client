/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#331A15",
          2: "#374151",
          3: "#1B1A1A", //primary dark
          4: "#ECEAE3", //section bg
          5: "#D2B48C", //btn bg
        },
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      rancho: ["Rancho", "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
