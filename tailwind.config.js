/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#120036",
        button: "#8f5edf",
        subhead: "#a6dbda",
        featuredbg: "#35005e",
      },
      fontFamily: {
        body: ["Outfit", 'serif']
      }
    },
  },
  plugins: [],
};
