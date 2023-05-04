/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#3B3A5D',
        secondary: '#FFBB50',
        content: '#8F8F8F',
        link: '#B16642',
        border: '#B16642',
      },
      fontFamily: {
        kuf: ['Kufam', 'sans-serif'],
      },
      gridTemplateColumns: {
        twoinrow: 'repeat( auto-fit, minmax(350px, 1fr) )',
        auto: 'repeat( auto-fit, minmax(300px, 1fr) )',
      },
    },
  },
  plugins: [],
};
