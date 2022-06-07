import React from "react"
import Header from '../components/header'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import  Banner from '../components/index/banner'
import  Centent from '../components/index/centent'

// import  Footer from '../components/layouts/footer'
import  Footer from '../components/footer'
import  Global from '../components/index/global'

const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <Centent />
    <Global />
    <Footer />
  </>
)

export default IndexPage
