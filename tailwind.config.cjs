/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C778DD',
        grey: '#ABB2BF',
        background: '#282C33'
      }
    },
    screens: {
      lg: '1200px',
      md: '750px',
      sm: '640px'
    }
  },
  plugins: []
}
