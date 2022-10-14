/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      'xl': {'max': '1125px'},
      'lg': {'max': '900px'},
      'md': {'max':  '690px'},
      'sm': {'max': '460px'},
    }
  },
}