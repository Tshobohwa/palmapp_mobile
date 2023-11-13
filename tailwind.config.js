/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "leaf-50": "#bed1bd",
        "leaf-100": "#7cac84",
        "leaf-200": "#589563",
        "leaf-300": "#048444",
        "leaft-light": "#f4fdf4",
      },
    },
  },
  plugins: [],
};
