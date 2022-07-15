/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1F3757",
        "light-cream": "#F3F3F3",
        "light-blue": "#2A45C2",
        "mid-gray": "#BABFD4",
        "rock-color": "#DB2E4D",
        "rock-shade": "#9D1634",
        "scissors-color": "#EB9F0E",
        "scissors-shade": "#C76C1B",
        "paper-color": "#4664F4",
        "paper-shade": "#2A45C2",
      },
    },
  },
  plugins: [],
};
