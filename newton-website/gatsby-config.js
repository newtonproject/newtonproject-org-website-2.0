module.exports = {
  siteMetadata: {
    title: `Newton`,
    description: `Newton-Infrastructure for the community economy,providing governance,collaboration and incentive. We are committed to creating highly collaborative, lower cost, highly automated community economy, everyone contributes,everyone benefits.`,
    author: `Newton`,
    siteUrl: `https://www.newtonproject.org/`,
    supportedLanguages: [`en`]
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        formats: [`auto`, `webp`],
        backgroundColor: `transparent`,
        blurredOptions: 10,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Newton`,
        short_name: `Newton`,
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
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    // env
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GATSBY_API_URL", "GATSBY_INTL_GITHUB", "GATSBY_MD_GITHUB"]
      },
    },
    // md
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
      __key: "md",
    },
    // Ability to set custom IDs for headings (for translations)
    // i.e. https://www.markdownguide.org/extended-syntax/#heading-ids
    `gatsby-remark-autolink-headers`,
    // Image support in markdown
    `gatsby-remark-images`,
    `gatsby-remark-copy-linked-files`,
    // READING time
    "gatsby-remark-reading-time",
    // MDX support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              maxWidth: 1200,
            },
          },
        ],
      },

      // Note: in order for MDX to work with gatsby-remark-plugins
      // The plugin must be listed top-level & in gatsbyRemarkPlugins
      // See: https://www.gatsbyjs.org/docs/mdx/plugins/
      gatsbyRemarkPlugins: [
        {
          // Local plugin to adjust the images urls of the translated md files
          //resolve: require.resolve(`./plugins/gatsby-remark-image-urls`),
        },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            enableCustomId: true,
            elements: [`h1`, `h2`, `h3`, `h4`],
            className: `header-anchor`,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            backgroundColor: `transparent`,
            maxWidth: 1200,
          },
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            maxWidth: 1200,
          },
        },
      ],
      remarkPlugins: [],
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    // `gatsby-transformer-remark`,
    // `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `./src/data/`,
    //   },
    // },
    `gatsby-transformer-gitinfo`,
    {
      resolve: `gatsby-transformer-gitinfo`,
      options: {
        include: /\.md$|\.csv/i, // Only .md & .csv files
      },
    },
  ],
}
