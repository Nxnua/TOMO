/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    colors: {
      "orange": "var(--orange)",
      "black-75": "rgba(var(--black-75))"
    },
    extend: {},
  },
  plugins: [],
}

