import React, { useState, useCallback } from 'react'
import bannerMobileImg from '../../static/images/banner.png'
import bannerMobileImgDev from '../../static/images/banner-dev.png'

export default function BannerImg() {
  // const [loaded, setLoaded] = useState(false)
  // const onLoad = useCallback(() => {
  //   setLoaded(true)
  // }, [])

  const [imgSrc, setImgSrc] = useState('')
  function onLoad() {
    setImgSrc(bannerMobileImg)
  }
  function onError() {
    setImgSrc(bannerMobileImgDev)
  }

  return (
    <>
      {/* <img style={{ display: loaded ? 'block' : 'none' }} onLoad={onLoad} src={bannerMobileImg} />
      {!loaded && <img src={bannerMobileImgDev} />} */}
      <img onLoad={onLoad} onError={onError} src={imgSrc} />
    </>
  )
}
