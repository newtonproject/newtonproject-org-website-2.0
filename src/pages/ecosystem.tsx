import React from "react"
import Seo from '../components/seo'
import Header from '../components/header'
import  Footer from '../components/footer'
import  EcosystemContent from '../components/ecosystemContent'
import  ScrollTop from '../components/scrollTop'

const Ecosystem = () => (
    <div className={'ecosystem-html'}>
      <Seo title={'Ecosystem'} description={''} meta={[]} lang={''}  />
      <Header />
      <EcosystemContent />
      <Footer />
      <ScrollTop />
    </div>
)

export default Ecosystem
