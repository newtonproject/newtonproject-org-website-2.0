module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      backgroundImage: {
        'body-bg': "url('../images/bg.png')",
        'header-bot': "url('../images/header-bot.png')",
        'header-zh': "url('../images/language.png')",
        'search': "url('../images/search.png')",
        'banner-a-bg': "url('../images/banner-a-bg.png')",
        'footerbg1': "url('../images/footer/footerbg1.png')",
        'global-bg': "url('../images/index/global-bg.png')",
       },
      colors: {
        blueW: '#74CBFF',
        blueS: '#B6E3FE',
        blueT: '#119BFF',
        black: '#000',
        grayf9: '#F9F9F9',
        grag2c: '#2C465E',
        grag96a: '#96A9BA',
        gragd1: '#D1E5F9',
        gray20: '#207CD1',
      },
      border: {
        imgcol: 'border-image: -webkit-linear-gradient(top left, #CFFFFA 0%, #B5EAFF 32%, #FEBCE6 69%, #FFAFB1 100%)100 100 100 100;'
      },
    },
    // backgroundColor: theme => ({
    //   ...theme(''),
    // }),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
