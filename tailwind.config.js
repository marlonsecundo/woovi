const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03D69D",
        secondary: "#133A6F",
        "base-100": "#FFFFFF",
        "base-200": "#E5E5E5",
        "base-300": "#AFAFAF",
        "base-400": "#b2b2b2",

        "base-content": "#4d4d4d",
        "secondary-content": "#FFFFFF",
      },

      borderRadius: {
        10: "10px",
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      padding: {
        "page-padding": "20px",
      },
    },
  },
  plugins: [],
});
