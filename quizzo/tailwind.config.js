/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundPurple: "#7F71E4",
        colorPink: "#EEA2B6",
        lightPurple: "#E9E5FA",
        lightestPurple: "#EFEAFA",
        lavender: "#E4DBF5",
      },
    },
    fontFamily: {
      varelaRound: 'Varela Round'
    }
  },
  plugins: [],
};
