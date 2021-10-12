// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './public/index.html'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': 'Poppins',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'emerald': {
        '50': '#f5fcf7', 
        '100': '#eafaef', 
        '200': '#cbf2d8', 
        '300': '#abe9c1', 
        '400': '#6dd992', 
        '500': '#2ec963', 
        '600': '#29b559', 
        '700': '#23974a', 
        '800': '#1c793b', 
        '900': '#176231'
      }
    },
    inset: {
      '1/2': '50%',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
