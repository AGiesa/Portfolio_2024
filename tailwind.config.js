/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.js"
  ],
  
  darkMode: 'class',

  theme: {

      fontFamily: {
        'sans': ['Saira', ...defaultTheme.fontFamily.sans],
      },

      extend: {
        colors: {
          'petrol':{
          100:'#E3F5FA',
          200:'#C7E7F0',
          300:'#86DAF0',
          400:'#4ABCD9',
          500:'#2797B2',
          600:'#016C88',
          700:'#0F5364',
          800:'#114552',
          /**'primary-1': "var(--primary-1)",
          'primary-2': "var(--primary-2)",
          'primary-3': "var(--primary-3)",*/

        }
      },
    },


  variants: {
    
    extend: {
      backgroundColor: ["active"],
      ringColor: ['focus'],
    },
  },
},
  plugins: [
    require('flowbite/plugin')
    
  ],
} 