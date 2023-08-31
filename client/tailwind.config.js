/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        240: "240px",
      },
      height: {
        60: "60px",
      },
    },
  },
  plugins: [],
};
