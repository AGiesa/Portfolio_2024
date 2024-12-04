/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

      fontFamily: {
        'sans': ['Saira', ...defaultTheme.fontFamily.sans],
      },

      extend: {
        colors: {
          'petrol-100':'#E3F5FA',
          'petrol-200':'#C7E7F0',
          'petrol-300':'#86DAF0',
          'petrol-400':'#4ABCD9',
          'petrol-500':'#2797B2',
          'petrol-600':'#016C88',
          'petrol-700':'#0F5364',
          'petrol-800':'#114552',

        }
      },
    },


  variants: {
    
    extend: {
      backgroundColor: ["active"],
      ringColor: ['focus'],
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}