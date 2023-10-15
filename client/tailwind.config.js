/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
