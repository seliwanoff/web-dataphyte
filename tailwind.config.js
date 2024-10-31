// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files in src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `linear-gradient(61.65deg, #131212 65.57%, #5A4487 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
      },
      fontFamily: {
        polySans: ["PolySans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
