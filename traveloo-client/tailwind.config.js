/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F85E9F',
        'secondary': '#5D50C6',
        'tertiary': '#FF5722',
        'base': '#fff',
     
      },
      
    },
  },
  plugins: [],
}

