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
        'community-banner': "url('../images/community-banner.png')",
        'community-banner-h5': "url('../images/community-banner-h5.png')",
        'footer-bg': "url('../images/footer/footer-bg.png')",
        'footer-bg-h5': "url('../images/footer/footer-bg-h5.png')",
        'docs-a': "url('../images/docs/docs-a.png')",
        'docs-tit': "url('../images/docs/docs-tit.png')",
        'docs-data': "url('../images/docs/docs-data.png')",
        'docs-money': "url('../images/docs/docs-money.png')",
        'docs-price': "url('../images/docs/docs-price.png')",
        'page-right': "url('../images/page-right.png')",
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
        graye3: '#E3EDF7',
        gragd1: '#D1E5F9',
        gray20: '#207CD1',
        graye3e: '#E3EEF6 ',
        graydd: '#DDF1FD',
        gray96: '#96A9BA',
        grayea: '#EAF5FE',
        gray11: '#119BFF ',
        gray333: '#333333',
        graydd: '#DDEBF7',
        graybc: '#BCE6FF',
        green07: '#07D600',
        grayed: '#EDF5FA',
        gray3d3d:'#3D3D3D',
        grayf0:'#F0F6FB',
        graye0:'#E0ECF6',
        grayeb:'#EBF3FA',
        grayd7:'#D7E5F1',
        grayef:'#EFF6FC',
        redd0: '#d00009'
      },
      width: {
        'w1/3': '31%',
        'w2/3': '46%',
      },
      fontSize: {
        font22: '1.4rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
  
}
