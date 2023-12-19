/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    debugScreens: {
      position: ["top", "left"],
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
        fontSize: "18px",
      },
    },
    extend: {
      backgroundImage: {
        hero_bg: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
