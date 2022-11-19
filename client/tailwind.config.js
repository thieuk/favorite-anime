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
      'xl': {'max': '1115px'},
      'lg': {'max': '910px'},
      'md': {'max':  '708px'},
      'sm': {'max': '500px'},
    }
  },
}