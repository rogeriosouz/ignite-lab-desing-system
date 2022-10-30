/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32
      },

      colors: {
        black: '#00000',
        white: '#fff',
        trasparent: 'transparent',

        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#c4c4cc',
          100: '#E1E1E6'
        },

        cyan: {
          500: '#61DAFB',
          300: '#9DEAFF',
        }

      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
