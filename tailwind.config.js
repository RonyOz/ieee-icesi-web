/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ieee-dark-bg': '#080d17',
        'ieee-dark-card': '#1e293b',
        'ieee-light-bg': '#ffffff',
        'ieee-light-card': '#f1f5f9',
        'ieee-primary': '#5267f1'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};