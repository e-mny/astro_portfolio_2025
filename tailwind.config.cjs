/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  darkMode: "class",
  
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', 'sans-serif'],
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Primary blue
        bluePrimary: '#1e80ff',

        // Accent colors
        yellowAccent: '#FFD700', // or #F5A623
        pinkAccent: '#FF6F61', // or #F28D8C

        // Neutral colors
        lightGray: '#F5F5F5', // or #EAEAEA
        white: '#FFFFFF',
        slateBlue: '#6A5ACD',
        offWhite: '#F9F9F9', // or #FAFAFA
        
        // Hover/Interactive
        cyanHover: '#A2DFF7', // or #4DB8FF
        
        
        charcoalGray: '#9f9fa9',
        primary: "#1e80ff", // Blue
        darkGray: "#121212", // Dark Gray
        sky: "#a8d0e6", // Pastel Sky Blue
        lavender: "#c3aed6", // Pastel Lavender
        blush: "#f7d1cd", // Soft Blush Pink
        beige: "#f5e6ca", // Warm Beige
        mint: "#c5e4c7", // Cool Mint Green
        error: "#ff6b6b", // Soft Red
        success: "#c5e4c7" // Mint Green
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            ":not(pre) > code": {
              backgroundColor: theme("colors.neutral.200"),
              border: "1px solid",
              borderColor: theme("colors.zinc.300"),
              padding: "0.250rem 0.4rem",
              borderRadius: "0.250rem",
              fontWeight: "400",
            },
          },
        },
        invert: {
          css: {
            ":not(pre) > code": {
              backgroundColor: theme("colors.neutral.800"),
              borderColor: theme("colors.zinc.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
