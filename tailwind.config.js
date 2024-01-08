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
      boxShadow: {
        faqShadow: "0px 32px 56px 0px rgba(80, 0, 118, 0.10)",
      },
    },
  },
  plugins: [],
};
