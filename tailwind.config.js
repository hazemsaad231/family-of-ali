/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: '#1a237e',
        secondary: '#3949ab',
        basic : '#131550',
        'text-color': '#1a237e',
        'light-blue': '#e8eaf6',
        cream: '#f5f7ff',
        'dark-blue': '#0d47a1',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 