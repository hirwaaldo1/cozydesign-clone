/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fraunces72ptsupersoft", "sans-serif"],
        "sans-144": ["Fraunces144ptsupersoft", "sans-serif"],
        geomanist: ["Geomanist", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#28313D",
          50: "#223240",
        },
        gray: "#E4DED5",
        secondary: {
          DEFAULT: "#CDA98E",
          50: "#c47d57",
          100: "#b55730",
          200: "#7c4e49 ",
          300: "#d4ac8e",
        },
      },
      backgroundImage: {
        "paragraph-bg": "url('/assets/img/imgp1.webp')",
      },
    },
  },
  plugins: [],
};
