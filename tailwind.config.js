/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '!./node_modules'],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444',
        primaryLight: '#d8b4fe',
        light: '#ffffff',
        lightShade: '#F4F6FF',
        dark: '#475569',
        semiDarkTr: 'rgba(38, 41, 47, 0.2)',
        grey: '#556669',
        red: '#ef4444',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
