/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        konexy: ['"Konexy Personal Use"', 'sans-serif'],
      },
      colors: {
        grayText: '#3A3A3A',
      },
      lineHeight: {
        '44': '44px', // for heading line-height same as Figma
      },
      fontSize: {
        '32px': ['32px', '44px'], // font-size + line-height
      },
    },
  },
  plugins: [],
};
