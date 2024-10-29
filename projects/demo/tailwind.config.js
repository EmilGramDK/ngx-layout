/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Application files
    "../lib/src/lib/**/*.{html,ts}", // Include your library components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
