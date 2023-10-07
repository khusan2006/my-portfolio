/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
      mulish: ["Mulish"]
    },
    extend: {
      height: {
        '100': '26rem'
      },
      boxShadow: {
        'white-md': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'white-lg': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'white-xl': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
      },

    },
  },
  plugins: [],
}

