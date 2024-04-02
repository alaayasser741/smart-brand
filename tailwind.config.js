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
      width: {
        sidebar: '300px',
        content: 'calc(100% - 300px)',
        sidebarCollapsed: '60px',
        contentCollapsed: 'calc(100% - 60px)',
      }
    },
  },
  plugins: [],
}