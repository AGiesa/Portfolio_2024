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
      extend: {},
    },

  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}