/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Australian Flag Blue (primary)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#012169', // Australian flag blue
          600: '#001a54',
          700: '#001447',
          800: '#001139',
          900: '#000e2b',
        },
        // Australian Flag Red (accent)
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#e4002b', // Australian flag red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Pure white for stars and backgrounds
        australian: {
          white: '#ffffff',
          blue: '#012169',
          red: '#e4002b',
        }
      }
    },
  },
  plugins: [],
}