import React from "react"
import Seo from '../components/seo'
import Header from '../components/header'
import Banner from '../components/home/banner'
import Centent from '../components/home/centent'
import Footer from '../components/footer'
import News from '../components/home/news'
import GlobalCommunity from '../components/home/globalCommunity'
import ScrollTop from '../components/scrollTop'

const IndexPage: React.FC = () => {

  return (
    <>
    <Seo title={'Home'} description={''} meta={[]} lang={''} />
    <div className={'new-index'}>
      <Header />
      <Banner />
      <Centent />
      <News />
      <GlobalCommunity title={'Global Community'} />
      <Footer />
      <ScrollTop />
    </div>
    </>
  )

}

export default IndexPage
