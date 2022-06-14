const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Newton`,
    description: `Newton-Infrastructure for the community economy,providing governance,collaboration and incentive. We are committed to creating highly collaborative, lower cost, highly automated community economy, everyone contributes,everyone benefits.`,
    author: `Newton`,
    siteUrl: `https://www.newtonproject.org/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/static/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        path: `${__dirname}/src/static/images`,
        icon: `src/static/images/favicon.png`, 
       // This path is relative to the root of the site.
      },
     
    },
    `gatsby-plugin-react-helmet`,
    
  //   `gatsby-plugin-alias-imports`,
  //   {
  //     resolve: `gatsby-plugin-alias-imports`,
  //     options: {
  //       alias: {
  //         '@': path.resolve(__dirname, 'src')
  //       }
  //   }
  // }
    
  ],
}
