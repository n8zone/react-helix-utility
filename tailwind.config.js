/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono' : ['Roboto Mono', 'Courier New']
      }
    },
  },
  plugins: [],
}