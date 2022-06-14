import React from "react"
import Seo from '../components/seo'
import Header from '../components/header'
import  Footer from '../components/footer'
import  CommunityContent from '../components/communityContent'
import  ScrollTop from '../components/scrollTop'

const Community = () => (
    <>
      <Seo title={'Community'} description={''} meta={[]} lang={''}  />
      <Header />
      <CommunityContent />
      <Footer />
      <ScrollTop />
    </>
)

export default Community
