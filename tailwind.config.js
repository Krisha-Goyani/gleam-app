/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'oswald': ['Oswald'],
        'circular-std': ['Circular Std', 'sans-serif'],
        'circular-pro': ['Circular Pro', 'sans-serif'],
        'circular-air-pro': ['Circular Air Pro', 'sans-serif'],
      },
      colors: {
        'border-primary': '#FFF1F1',
        'border-secondary': '#bebebe',
        'border-green': '#45C917',
        'green-primary': '#79AE48',
        'border-gray': '#D4D8EB',
        'border-gray-light': '#F1F2FB',
        'border-red': '#BF0000',
        'blue-secondary' : '#0071B4',
        'yellow-primary' : '#FFC107',

        'text-primary': '#2c2c2c',
        'black-secondary': '#373A36',
        'text-gray': '#707070',
        'text-gray-tertiary': '#7F8294',
        'text-green': '#45C917',
        'text-red': '#BF0000',
        'text-gray-light': '#D4D8EB',
        'gray-light-secondary': '#4C5163',
        
        'text-black-primary': '#2C2C2C',
        'black-secondary': '#1D1D1D',
        'text-white': '#FFFFFF',
        'text-blue': '#5D76FF',
        'text-gray-light': '#F5F5F5',
        'container-bg': '#9e9fc1',
        'bg-info': '#E4EAEC',
        'bg-green' : '#009951',
        'bg-orange' : '#FF9500',
        'bg-blue-light': '#EEEFF7',
        'bg-gray-light': '#FBFCFF',
        'bg-red' : '#FF3B30',
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '100%',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}

