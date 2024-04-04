/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,htm,js,jsx}", './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
