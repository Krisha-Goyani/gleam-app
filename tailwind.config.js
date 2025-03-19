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
    screens: {
      'xs': '360px',
      'xs-md': '450px',
      'sm': '640px',
      'md': '768px',
      'md-lg': '992px',
      'lg': '1024px',
      'lg-xs': '1054px',
      'lg-sm': '1130px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom': '1400px'
    },
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
        'border-red': '#BF0000',
        'yellow-primary': '#FAC917',
        'yellow-secondary': '#FFE815',
        'gray-secondary' : '#D7D2CB',
        'gray-light-secondary': '#F0ECE7',
        'gray-light-primary': '#4C5163',
        'gray-tertary': '#D2CFE1',
        'text-gray': '#707070',
        'text-gray-tertiary': '#7F8294',
        'text-gray-light': '#D4D8EB',
        'green-light-secondary': '#F2F7ED',
        'text-primary': '#2c2c2c',
        'text-green': '#45C917',
        'text-red': '#BF0000',
        'black-secondary': '#373A36',
        'black-primary': '#262626',
        'black-light': '#1D1D1D',
        'white-primary': '#FFF2F5',
        'container-bg': '#9e9fc1',
        'bg-info': '#E4EAEC',
        'green-light': '#ECFFDB',
        'bg-orange': '#FF9500',
        'blue-primary': '#517EE5',
        'blue-secondary': '#0071B4',
        'blue-tertery': '#C0D1E6',
        'blue-light': '#EBF4FF',
        'blue-light-secondary': '#B7C7DB',
        'text-blue': '#5D76FF',
        'bg-gray-light': '#FBFCFF',
        'bg-red': '#FF3B30',
        'purple-light': '#ECD5FF',
        'purple-primary': '#B457FD',

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

