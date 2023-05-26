/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        numBg: "#1E2A53",
        textGray: "#B7BBC7",
        cardBg: "#E7EAEE",
        customBlue: "#025EFE",
        cardWhite: "#FCFCFC",
        textlightGray: "#323B5A",
        lightGray: "#EAEEF2",
      },
    },
  },
  plugins: [],
};
