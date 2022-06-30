import React, { useState, useCallback } from 'react'
import bannerMobileImg from '../../static/images/banner.png'
import bannerMobileImgDev from '../../static/images/banner-dev.png'

export default function BannerImg() {
  const [bannerImg, setBannerImg] = useState(bannerMobileImgDev)
  const time = new Date().getTime()
  const onLoad = useCallback(() => {
    setBannerImg(bannerMobileImg)
  }, [])

  return (
    <>
      <img onLoad={onLoad} src={bannerImg} />
      {/* {!loaded && <img src={bannerMobileImgDev + '?' + time} />} */}
    </>
  )
}
