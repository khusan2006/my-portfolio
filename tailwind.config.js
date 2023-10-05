/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif'],
      mulish: ["Mulish"]
    },
    extend: {
      height: {
        '100': '26rem'
      },

    },
  },
  plugins: [],
}

