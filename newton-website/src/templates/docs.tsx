import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import styled from 'styled-components'
const components = { Link } // Provide common components here

// const Page = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   border-bottom: 1px solid ${(props) => props.theme.colors.border};
// `
// const components = {
//   a: Link,
// }
const DocsPage = ({ data: { allMdx } }: any) => {
  const content = allMdx.edges[0].node
  // console.log('======',content)
  return (
    <div className={'container docs'}>
      <h1 className={'title'}>{content.frontmatter.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{content.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          rawBody
          body
          frontmatter {
            title
          }
        }
      }
    }
  }
`
export default DocsPage
