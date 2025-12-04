/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1a1b26", // deep slate
          600: "#565f89", // steel gray
          500: "#a9b1d6", // pale lavender-gray
          400: "#c0caf5", // soft periwinkle
          300: "#f2f5ff", // almost white w/ blue tint
        },
        green: "#2de3b3",   // neon mint
        blue: "#6d5dfc",    // violet-blue
        orange: "#ff6b6b",  // modern coral red
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
