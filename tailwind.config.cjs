/** @type {import('tailwindcss').Config} */

// const tw = require('tailwindcss/defaultConfig')

module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Alliance1',
        'Alliance1Fallback',
        // 'Inter var',
        // 'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: "translateY(-100%)" },
          '70%': { opacity: 0 },
          '100%': { opacity: 1, transform: "translateY(0)" },
        },
        'fade-out': {
          '0%': { opacity: 1, transform: "translateY(0)" },
          '70%': { opacity: 0 },
          '100%': { opacity: 0, transform: "translateY(-100%)" },
        },
      },
      animation: {
        'fade-in': 'fade-in 500ms ease-in-out',
        'fade-out': 'fade-out 500ms ease-in-out',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
