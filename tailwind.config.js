/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C28',
        accent: '#FFD200',
        white: '#FFFFFF',
        lightGray: '#F5F5F5',
        midGray: '#A3A3A3',
        'ubio-white': '#FFFFFF',
        'ubio-dark-blue': '#1C1C28',
        'ubio-yellow': '#FFD200',
        'ubio-yellow-dark': '#FFC700',
        'ubio-light-gray': '#D3D3D3',
        'ubio-mid-gray': '#A3A3A3',
      },
    },
  },
  plugins: [],
};