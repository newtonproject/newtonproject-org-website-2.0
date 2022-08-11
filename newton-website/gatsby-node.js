const path = require(`path`)
const fs = require("fs")
const { createFilePath } = require(`gatsby-source-filesystem`)
const gatsbyConfig = require(`./gatsby-config.js`)

const supportedLanguages = gatsbyConfig.siteMetadata.supportedLanguages
const defaultLanguage = gatsbyConfig.siteMetadata.defaultLanguage


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
      template: node.internal.template
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              lang
              template
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }


  // For all markdown nodes, create a page
  result.data.allMdx.edges.forEach(({ node }) => {

    let relativeDirectory = node.slug;
    if(relativeDirectory.endsWith("/")) {
      relativeDirectory = relativeDirectory.substring(0, relativeDirectory.length - 1)
    }
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/templates/${node.frontmatter.template}.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        id: node.id,
        relativeDirectory: relativeDirectory
      }
    })
    // console.log("start create page success====" + node.slug);


    const language = node.frontmatter.lang
    const slug = node.slug;
    // If markdown file is English, check for corresponding file in each language.
    // e.g. English file: "src/content/community/index.md"
    // e.g. corresponding German file: "src/content/translations/de/community/index.md"
    // if (language !== defaultLanguage) {
    //   for (const lang of supportedLanguages) {
    //     // splitPath.splice(2, 0, `translations/${lang}`)
    //     // const langPath = splitPath.join("/")
    //     console.log("language:" + language);
    //     // If corresponding file doesn't exist, create a page for it.
    //     if (!fs.existsSync('zh')) {
    //       const splitSlug = slug.split("/")
    //       splitSlug.splice(1, 1, lang)
    //       const langSlug = splitSlug.join("/")
    //       console.log("create page zh:" + langSlug);
    //       createPage({
    //         path: langSlug,
    //         component: path.resolve(`./src/templates/docs.tsx`),
    //         context: {
    //           slug: langSlug,
    //           isOutdated: false,
    //           isContentEnglish: true,
    //           // Create `intl` object so `gatsby-plugin-intl` will skip
    //           // generating language variations for this page
    //           intl: {
    //             language: lang,
    //             defaultLanguage,
    //             languages: supportedLanguages,
    //             routed: true,
    //             originalPath: slug.substr(3),
    //             redirect: false,
    //           },
    //         },
    //       })
    //     }
    //   }
    // }
  }
  )

}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve("buffer/"),
      },
    },
  })
}
