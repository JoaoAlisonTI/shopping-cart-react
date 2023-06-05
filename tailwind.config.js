/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        cinza: '#18181B',
        grayBorder: '#3f3f46',
        roxo: '#9333ea',
      },
    },
  },
  plugins: [],
};
