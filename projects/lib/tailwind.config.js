/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/components/**/*.{html,ts}", // Include your library components here
    "./src/lib/**/*.{html,ts}", // Main Angular app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
