// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files in src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        "no-custom": `linear-gradient(190.17deg, rgba(0, 0, 0, 0) 56.26%, rgba(0, 0, 0, 0.75) 79.08%)`,
        "custom-gradient": `linear-gradient(61.65deg, #131212 65.57%, #5A4487 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
      },
      boxShadow: {
        "custom-heavy": "0px 18px 48.5px 0px rgba(0, 0, 0, 0.08)",
        "custom-light": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
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
