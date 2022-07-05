import React, { useEffect, useState } from 'react'
import { arrDateBanner } from '../../hooks/createTime'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { getRequest } from '../../hooks/axiosData'
import { newsEnvUrl } from '../../hooks/url'
import BannerImg from './bannerImg'
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
      content: intl.formatMessage({ id: 'Decentralized digital wallet' }),
      url: newsEnvUrl + '/newpay/',
      isLink: false
    },
    {
      title: intl.formatMessage({ id: 'Get New' }),
      content: intl.formatMessage({ id: 'Earned from the Ecosystem' }),
      url: '/getnew/',
      isLink: true
    },
    {
      title: intl.formatMessage({ id: 'NewExplorer' }),
      content: intl.formatMessage({ id: 'Explorer & Analytics platform' }),
      url: 'https://explorer.newtonproject.org/',
      isLink: false
    },
    {
      title: intl.formatMessage({ id: 'NewBridge' }),
      content: intl.formatMessage({ id: 'Realize asset exchange' }),
      url: 'https://newbridge.network/',
      isLink: false
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
                        <a href={newsEnvUrl + item.url} target="_blank">
                          {item.title}
                          {arrDateBanner(item.created_at)}
                        </a>
                      ) : (
                        <a href={newsEnvUrl + item.url} target="_blank">
                          {item.title}
                          {index !== 0 ? arrDateBanner(item.created_at) : null}
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
            <div className={'banner-box'}>
              <BannerImg />
            </div>
          </div>
        </div>
        <div className={'banner-link'}>
          {bannerlist.map((item, index) => {
            return (
              <div key={index}>
                {item.isLink == true ? (
                  <Link to={item.url}>
                    <span>{item.title}</span>
                    <i>{item.content}</i>
                  </Link>
                ) : (
                  <a href={item.url} target="_blank">
                    <span>{item.title}</span>
                    <i>{item.content}</i>
                  </a>
                )}
              </div>
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
          <BannerImg />
        </div>
        <div className={'banner-mobile banner-mobile-news container'}>
          <div className={'banner-news'}>
            {data && data.length > 0
              ? data.map((item: any, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {data.length == 1 ? (
                        <a href={newsEnvUrl + item.url} target="_blank">
                          {item.title}
                          {arrDateBanner(item.created_at)}
                        </a>
                      ) : (
                        <a href={newsEnvUrl + item.url} target="_blank">
                          {item.title}
                          {index !== 0 ? arrDateBanner(item.created_at) : null}
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
                <div key={index}>
                  {item.isLink == true ? (
                    <Link to={item.url}>
                      <span>{item.title}</span>
                      <i>{item.content}</i>
                    </Link>
                  ) : (
                    <a href={item.url} target="_blank">
                      <span>{item.title}</span>
                      <i>{item.content}</i>
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
