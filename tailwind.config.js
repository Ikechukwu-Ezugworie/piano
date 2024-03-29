module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  //daisyui 
  daisyui: {
    themes: [
      'light', // first one will be the default theme
      'dark',
      'forest',
    ],

  }
}
