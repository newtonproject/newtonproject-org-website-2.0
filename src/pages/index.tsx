import React from "react"
import Banner from '../components/home/banner'
import Centent from '../components/home/centent'
import News from '../components/home/news'
import GlobalCommunity from '../components/home/globalCommunity'
import NormalLayout from '../components/NormalLayout'
import { PageModel } from '../hooks/PageModel'

export default IndexPage

function IndexPage() {
  let pageModel = new PageModel('Home')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <div className={'new-index'}>
      <Banner />
      <Centent />
      <News title={'News'} />
      <GlobalCommunity title={'Global Community'} />
    </div>
  )
}