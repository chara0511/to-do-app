module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightskyblue: '#56DDFF',
        mediumorchid: '#BF58F3',
      },
      letterSpacing: {
        widest2x: '.3em',
      },
      maxWidth: {
        '2xs': '1.5rem',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
