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
        // green
        'green-primary': '#79AE48',
        'green-light-primary': '#4BAE4F',
        'green-secondary': '#67963c',
        'green-light-secondary': '#F2F7ED',
        'green-light': '#ECFFDB',
        // red
        'red-primary' :'#F34235',
        // yellow
        'yellow-primary': '#FAC917',
        'yellow-secondary': '#FFE815',
        // gray
        'gray-secondary' : '#D7D2CB',
        'gray-light-secondary': '#F0ECE7',
        'gray-light-primary': '#4C5163',
        'gray-tertary': '#D2CFE1',
        'gray-light-tertary': '#373A3654',
        // black
        'black-primary': '#262626',
        'black-secondary': '#373A36',
        'black-light': '#1D1D1D',
        'black-light-secondary': '#777',
        'white-primary': '#FFF2F5',
        // blue
        'blue-primary': '#517EE5',
        'blue-light-primary': '#D2EEFF',
        'blue-secondary': '#0071B4',
        'blue-tertery': '#C0D1E6',
        'blue-light': '#EBF4FF',
        'blue-light-secondary': '#B7C7DB',
        // purple
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

