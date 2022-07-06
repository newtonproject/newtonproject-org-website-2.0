import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }:any) {
  // const content = data.allMdx.edges[0].node
  return (
      <div>
        {/* <h1>{content.frontmatter.title}</h1> */}
        {/* <p>{content.rawBody}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: content.html }} /> */}
        {/* <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider> */}
      </div>
 
  )
}

export const query = graphql`
  query($slug: String!) {
    allMdx(filter: {slug: {eq: $slug }}) {
      edges {
        node {
          slug
          rawBody
          tableOfContents
          html
        }
      }
    }
  }
`