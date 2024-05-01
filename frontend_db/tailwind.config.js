/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height:{
        '100':'32rem',
        '98':'26rem',
      }
    },
  },
  plugins: [require('daisyui'),],
}

