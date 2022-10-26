/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        purple: {
          light: '#7D57C6',
          DEFAULT: '#613F93',
          dark: '#4C2B7F',
        },
        blue: {
          light: '#50D6FF',
          DEFAULT: '#00ADEE',
          dark: '#1B75BB',
        },
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
