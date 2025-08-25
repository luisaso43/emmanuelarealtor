/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        pacifico: ["var(--font-pacifico)"],
        playfair: ["var(--font-playfair)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
