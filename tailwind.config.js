module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightskyblue: '#56DDFF',
        mediumorchid: '#BF58F3',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
      fontFamily: {
        body: ['Josefin Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest2x: '.3em',
      },
      height: {
        '1/3screen': '33vh',
      },
      maxWidth: {
        '2xs': '1.5rem',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
