import React from "react"
import Header from '../components/header'
import { StaticImage } from 'gatsby-plugin-image'



const NotFoundPage = () => (
  <div className={'not-found-page'}>
    <Header />
    <div className={'not-img'}>
      <StaticImage alt='telegram' src='../static/images/404.png' />
    </div>
  </div>
)

export default NotFoundPage
