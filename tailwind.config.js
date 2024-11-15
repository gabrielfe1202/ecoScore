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
      animation: {
        'pulse-bg': 'pulseBackground 2s infinite',  // Nome da animação
      },
      keyframes: {
        pulseBackground: {
          '0%': {
            transform: 'scale(1)',  // Inicia com tamanho normal
          },
          '50%': {
            transform: 'scale(1.2)',  // Expande o gradiente
          },
          '100%': {
            transform: 'scale(1)',  // Retorna ao tamanho normal
          },
        },
      },
    },
  },
  plugins: [],
}