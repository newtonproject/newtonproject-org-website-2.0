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
        'header-bot-hover': "url('../images/header-bot-hover.png')",
        'header-zh': "url('../images/language.png')",
        'search': "url('../images/search.png')",
        'banner-a-bg': "url('../images/banner-a-bg.png')",
        'footerbg1': "url('../images/footer/footerbg1.png')",
        'build-bg': "url('../images/home/build-bg.png')",
        'build1-bg': "url('../images/home/build1-bg.png')",
        'news-bg': "url('../images/home/news-bg.png')",
        'global-bg': "url('../images/home/global-bg.png')",
        'global-bg-hover': "url('../images/home/global-bg-hover.png')",
       },
      colors: {
        blue74: '#74CBFF',
        blueb6: '#B6E3FE',
        blue11: '#119BFF',
        black: '#000',
        grayf9: '#F9F9F9',
        grag2c: '#2C465E',
        grage5:'#E5F2FF',
        grayf7:'#F7FBFF',
        gray6a:'#6A8298',
        grag96a: '#96A9BA',
        gragd1: '#D1E5F9',
        gray20: '#207CD1',
        gray11: '#119BFF',
        gray96: '#96A9BA',
        gray11: '#119BFF ',
      },
      width: {
        'w1/3': '30%',
        'w2/3': '46%',
      },
      border: {
        imgcol: 'border-image: -webkit-linear-gradient(top left, #CFFFFA 0%, #B5EAFF 32%, #FEBCE6 69%, #FFAFB1 100%)100 100 100 100;'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
