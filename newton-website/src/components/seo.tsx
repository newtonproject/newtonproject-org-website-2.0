import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SeochildProps } from '../model/PageModel'

const Seo: React.FC<SeochildProps> = props => {
  const { title, description, meta, lang } = props
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        ...meta
      ]}
    />
  )
}
export default Seo

Seo.defaultProps = {
  description:
    'Newton-Infrastructure for the community economy,providing governance,collaboration and incentive. We are committed to creating highly collaborative, lower cost, highly automated community economy, everyone contributes,everyone benefits.',
  meta: [],
  lang: 'en'
}
