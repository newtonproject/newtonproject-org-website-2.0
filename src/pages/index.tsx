import React from 'react'
import Banner from '../components/home/banner'
import Centent from '../components/home/centent'
import News from '../components/home/news'
import GlobalCommunity from '../components/home/globalCommunity'
import NormalLayout from '../components/normalLayout'
import { PageModel } from '../hooks/pageModel'
import { useIntl } from 'gatsby-plugin-intl'

const IndexPage = () => {
  let pageModel = new PageModel('Home', 'new-index')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}
export default IndexPage

function Main() {
  const intl = useIntl()
  return (
    <>
      <Banner />
      <div className={'container'}>
        <Centent />
        <News title={intl.formatMessage({ id: 'News' })} />
        <GlobalCommunity title={intl.formatMessage({ id: 'Global Community' })} />
      </div>
    </>
  )
}
