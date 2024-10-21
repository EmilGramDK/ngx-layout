/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/lib/src/**/*.{html,ts}", // Include your library components here
    "./src/**/*.{html,ts}", // Main Angular app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
