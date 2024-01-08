/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPink: "#F8EEFF",
        palePurple: "#8B6990",
        pink: "#AD28EB",
        darkPurple: "#301534",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
