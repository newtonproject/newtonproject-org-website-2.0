import React, { useEffect, useState } from 'react'
import bannerMobileImg from '../../static/images/banner.png'
import { arrDateBanner, Weekly } from '../../hooks/createTime'
import { useIntl } from 'gatsby-plugin-intl'
import { getRequest } from '../../hooks/axiosData'
import { newsEnvUrl } from '../../hooks/url'

export default function Banner() {
  const intl = useIntl()
  const [data, setData] = useState([])

  useEffect(() => {
    const bannerUrl = newsEnvUrl + '/api/v1/home/banner/'
    const fetchData = async () => {
      const res = await getRequest(bannerUrl)
      setData(res.data.result.banner)
    }
    fetchData()
  }, [])

  let bannerlist = [
    {
      title: intl.formatMessage({ id: 'NewPay' }),
      centent: intl.formatMessage({ id: 'Decentralized digital wallet' }),
      url: 'https://www.newtonproject.org/newpay/'
    },
    {
      title: intl.formatMessage({ id: 'Get New' }),
      centent: intl.formatMessage({ id: 'Earned from the Ecosystem' }),
      url: '/getnew'
    },
    {
      title: intl.formatMessage({ id: 'NewExplorer' }),
      centent: intl.formatMessage({ id: 'Explorer & Analytics platform' }),
      url: 'https://explorer.newtonproject.org/'
    },
    {
      title: intl.formatMessage({ id: 'NewBridge' }),
      centent: intl.formatMessage({ id: 'Realize asset exchange' }),
      url: 'https://newbridge.network/'
    }
  ]
  return (
    <>
      <div className={'banner-pc container'}>
        <div className={'banner-centent'}>
          <div className={'banner-news'}>
            {data && data.length > 0
              ? data.map((item: any, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {data.length == 1 ? (
                        <a href={'https://www.newtonproject.org/' + item.url} target="_blank">
                          {item.title}
                          <span>{arrDateBanner(item.created_at)}</span>
                        </a>
                      ) : (
                        <a href={'https://www.newtonproject.org/' + item.url} target="_blank">
                          {index == 0 ? Weekly(item.title) : item.title}
                          <span className={index == 0 ? 'banner-time' : ''}>{arrDateBanner(item.created_at)}</span>
                        </a>
                      )}
                    </p>
                  )
                })
              : null}
            <div className={'banner-title'}>
              {intl.formatMessage({ id: 'Infrastructure' })}
              <br />
              {intl.formatMessage({ id: 'For The' })}
              <br />
              {intl.formatMessage({ id: 'Community' })}
              <br />
              {intl.formatMessage({ id: 'Economy' })}
            </div>
          </div>
          <div className={'banner-img'}>
            <img src={bannerMobileImg} alt="img" />
          </div>
        </div>
        <div className={'banner-link'}>
          {bannerlist.map((item, index) => {
            return (
              <a href={item.url} key={index} target="_blank">
                <span>{item.title}</span>
                <i>{item.centent}</i>
              </a>
            )
          })}
        </div>
      </div>
      <div className={'banner-mobile-box'}>
        <div className={'banner-mobile container'}>
          <div className={'banner-title'}>
            {intl.formatMessage({ id: 'Infrastructure' })}
            <br />
            {intl.formatMessage({ id: 'For The' })}
            <br />
            {intl.formatMessage({ id: 'Community' })} {intl.formatMessage({ id: 'Economy' })}
          </div>
        </div>
        <div className={'banner-img'}>
          <img src={bannerMobileImg} alt="img" />
        </div>
        <div className={'banner-mobile banner-mobile-news container'}>
          <div className={'banner-news'}>
            {data && data.length > 0
              ? data.map((item: any, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {data.length == 1 ? (
                        <a href={'https://www.newtonproject.org/' + item.url} target="_blank">
                          {item.title}
                          <span>{arrDateBanner(item.created_at)}</span>
                        </a>
                      ) : (
                        <a href={'https://www.newtonproject.org/' + item.url} target="_blank">
                          {index == 0 ? Weekly(item.title) : item.title}
                          <span className={index == 0 ? 'banner-time' : ''}>{arrDateBanner(item.created_at)}</span>
                        </a>
                      )}
                    </p>
                  )
                })
              : null}
          </div>
          <div className={'banner-link'}>
            {bannerlist.map((item, index) => {
              return (
                <a href={item.url} key={index}>
                  <span>{item.title}</span>
                  <i>{item.centent}</i>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
