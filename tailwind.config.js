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
        'body-bg-h5': "url('../images/bg-h5.png')",
        'header-bot': "url('../images/header-bot.png')",
        'header-bot-hover': "url('../images/header-bot-hover.png')",
        'header-zh': "url('../images/language.png')",
        'search': "url('../images/search.png')",
        'community-bg-h5': "url('../images/ecosystem/community-bg-h5.png')",
        'ecosystem-submit': "url('../images/ecosystem/ecosystem-submit.png')",
        'ecosystem-submit-h5': "url('../images/ecosystem/ecosystem-submit-h5.png')",
        'footer-bg': "url('../images/footer/footer-bg.png')",
        'footer-bg-h5': "url('../images/footer/footer-bg-h5.png')",
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
