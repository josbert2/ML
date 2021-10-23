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
   
    extend: {
      colors: {
        'blueGray': {
            '50': '#f7f8f9', 
            '100': '#f0f1f3', 
            '200': '#d8dce2', 
            '300': '#c1c7d1', 
            '400': '#939eae', 
            '500': '#64748b', 
            '600': '#5a687d', 
            '700': '#4b5768', 
            '800': '#3c4653', 
            '900': '#313944'
        },
        'blue': {
          '50': '#f4f7fe', 
          '100': '#e9effd', 
          '200': '#c9d8fa', 
          '300': '#a8c1f7', 
          '400': '#6692f1', 
          '500': '#2563eb', 
          '600': '#2159d4', 
          '700': '#1c4ab0', 
          '800': '#163b8d', 
          '900': '#123173'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
