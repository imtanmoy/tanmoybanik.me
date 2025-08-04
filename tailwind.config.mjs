/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary_bg: "#1A1A1A",
        primary_text: "#FFFFFF",
        secondary_text: "#A6A6A6",
        theme: {
          primary: "#71717a",
          secondary: "#52525b", 
          accent: "#a1a1aa",
          light: "#d4d4d8",
          dark: "#3f3f46"
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "source-code-pro": ["Source Code Pro", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
