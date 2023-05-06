/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: { 
          200: '#0E1765', 
          300: '#030422',
          500: '#090114',
          600: '#121214',
          800: '#050824'
        },
        purples: {
          200: '#9C83A7',
          500: '#350E58'
        },
        whites: {
          100: '#ECE4EF',
          200: '#D8CEDE'
        }
      },
      backgroundImage: {
        'gradient-darkBlue': 'linear-gradient(to bottom right, #030422, #090114)',
      },
      height: {
        'cardHeight': '608px'
      },
      width: {
        'cardWidth': '436px'
      },
      fontFamily: {
        sans: 'Source Sans Pro,  sans-serif'
      }
    },
  },
  plugins: [],
}

