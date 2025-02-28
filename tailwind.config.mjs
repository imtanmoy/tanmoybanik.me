/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary_bg: "#1A1A1A",
        primary_text: "#FFFFFF",
        secondary_text: "#A6A6A6",
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
