/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        cobalt: "rgb(var(--cobalt) / <alpha-value>)",
        ui: "rgb(var(--layer-ui) / <alpha-value>)",
        api: "rgb(var(--layer-api) / <alpha-value>)",
        data: "rgb(var(--layer-data) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
