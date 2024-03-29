import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl-v6'
import SEO from './seo'

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: 'title' })}`} description={''} meta={[]} lang={''} />
}

export default injectIntl(Redirect)
