/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepNavy: '#021526',
        richBlue: '#03346E',
        skyBlue: '#6EACDA',
        softBeige: '#E2E2B6',
      },
    },
  },
  plugins: [],
}