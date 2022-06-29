import React, { useState } from 'react'
import bannerMobileImg from '../../static/images/banner.png'
import bannerMobileImgDev from '../../static/images/banner-dev.png'

export default function BannerImg() {
  const [loaded, setLoaded] = useState(false)
  function onLoad() {
    setLoaded(true)
  }

  return (
    <>
      <img style={{ display: loaded ? 'block' : 'none' }} onLoad={onLoad} src={bannerMobileImg} />
      {!loaded && <img src={bannerMobileImgDev} />}
    </>
  )
}
