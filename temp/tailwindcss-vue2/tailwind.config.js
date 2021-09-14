module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: {
        500: 'green',
        600: 'blue'
      },
      gray: {
        100: '#eee',
      },
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
