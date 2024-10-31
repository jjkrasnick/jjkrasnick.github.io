/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'light-text': '#000000',
        'dark-text': '#FFFFFF',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #f8fafc, #f1f5f9)',
        'dark-gradient': 'linear-gradient(to bottom, #0f172a, #0f172a)',
        'section-light': 'linear-gradient(to bottom right, rgba(248, 250, 252, 0.8), rgba(241, 245, 249, 0.8))',
        'section-dark': 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8))',
        'card-light': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))',
        'card-dark': 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))',
        'button-gradient': 'linear-gradient(to right, #3B82F6, #2563EB)',
      },
    },
  },
  plugins: [],
};