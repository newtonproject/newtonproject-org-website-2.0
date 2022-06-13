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
        // 'banner-a-bg': "url('../images/banner-a-bg.png')",
        // 'footerbg1': "url('../images/footer/footerbg1.png')",
        // 'build-bg': "url('../images/home/build-bg.png')",
        // 'build1-bg': "url('../images/home/build1-bg.png')",
        // 'news-bg': "url('../images/home/news-bg.png')",
        // 'global-bg': "url('../images/home/global-bg.png')",
        // 'global-bg-hover': "url('../images/home/global-bg-hover.png')",
        'ecosystem-submit': "url('../images/ecosystem/ecosystem-submit.png')",
        'ecosystem-submit-h5': "url('../images/ecosystem/ecosystem-submit-h5.png')",
       },
      colors: {
        blue74: '#74CBFF',
        blueb6: '#B6E3FE',
        blue11: '#119BFF',
        blue92: '#92D8FE',
        blue70: '#70C5F4',
        blue59: '#59B7E8',
        grayf9: '#F9F9F9',
        grag2c: '#2C465E',
        grage5:'#E5F2FF',
        grage5f:'#E5F5FF',
        grayf7:'#F7FBFF',
        gray6a:'#6A8298',
        grag96a: '#96A9BA',
        gragd1: '#D1E5F9',
        gray20: '#207CD1',
        gray11: '#119BFF',
        gray96: '#96A9BA',
        gray11: '#119BFF',
        gray333: '#333333',
        graydd: '#DDEBF7',
        green07: '#07D600',
      },
      width: {
        'w1/3': '30%',
        'w2/3': '46%',
      },
      fontSize: {
        font22: '1.4rem'
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
