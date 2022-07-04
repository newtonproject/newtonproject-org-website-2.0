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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        formats: [`auto`, `webp`],
        backgroundColor: `transparent`,
        blurredOptions: 10,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7fbff`,
        theme_color: `#f7fbff`,
        display: `standalone`,
        path: `${__dirname}/src/static/images`,
        icon: `src/static/images/favicon.png`,
        // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // i18n support
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/static/intl`,
        // supported language
        languages: [`en`],
        // language file path
        defaultLanguage: `en`,
        // redirect to `/${lang}/` when connecting to `/`
        // based on user's browser language preference
        redirect: false,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    // env
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GATSBY_API_URL","GATSBY_INTL_GITHUB"]
      },
    },
  ],
}
