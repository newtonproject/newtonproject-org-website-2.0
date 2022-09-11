/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-08-07 14:17:35
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-11 22:38:41
 * @FilePath: /newtonproject-org-website-2.0/newton-website/src/components/seo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,user-scalable=no'
        },
        ...meta
      ]}
    />
  )
}
export default Seo

Seo.defaultProps = {
  description:
    'Newton - Infrastructure for the community economy,providing governance,collaboration and incentive. We are committed to creating highly collaborative, lower cost, highly automated community economy, everyone contributes,everyone benefits.',
  meta: [],
  lang: 'en'
}
