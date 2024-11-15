/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 20px 13px rgba(82, 130, 41, 0.42)'
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle, rgba(82, 130, 41, 1) 10%, rgba(3, 36, 89, 0) 71%)',
      },
      colors: {
        'eco-green': '#528229', 
      },
    },
  },
  plugins: [],
}