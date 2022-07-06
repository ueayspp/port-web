/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        128: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
