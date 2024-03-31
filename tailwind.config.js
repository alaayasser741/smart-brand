/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      colors: {
        'main-blue': '#00B3FF',
        'main-green': '#44BF00',
      },
      backgroundColor: {
        'main-blue': '#00B3FF',
        'main-green': '#44BF00',
        'dark-bg': '#01161E',
      },
    },
  },
  plugins: [],
}