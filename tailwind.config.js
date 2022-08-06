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
          orange: "#fea135",
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
      screens: {
        "phone-mini": "200px",
        "phone-xs": "320px",
        "phone-sm": "375px",
        "phone-md": "400px",
        "phone-lg": "480px",
        ...defaultTheme.screens,
        "desktop-med": "1350px",
        "desktop-wide": "1440px",
        max: "1920px",
      },
    },
  },
  plugins: [],
};
