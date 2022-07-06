const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: "#2F9FF8",
            dark: "#072D4B",
            light: "#F4F9F8",
            medium: "#0768B5",
          },
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
