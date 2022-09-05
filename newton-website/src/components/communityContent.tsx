import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import GlobalCommunity from '../components/home/globalCommunity'
import SubmitContent from './submitContent'
import News from '../components/home/news'
import { arrDate } from '../utils/createTime'
import bannerCommunity from '../static/images/ecosystem/community-banner.png'
import bannerCommunityH5 from '../static/images/ecosystem/community-banner-h5.png'
import announcementImg from '../static/images/ecosystem/announcements.png'
import { useIntl, Link } from 'gatsby-plugin-intl-v6'
import { getRequest } from '../utils/axiosData'
import { newsEnvUrl } from '../utils/url'
import Loading from '../components/home/loading'

export default function CommunityContent() {
  const intl = useIntl()
  const isActive = ({ isCurrent }: any) => {
    return isCurrent ? { className: 'active' } : {}
  }
  const [activities, setactivities] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [blogsItem, setBlogsItem] = useState([])
  const [voices, setVoices] = useState([])

  useEffect(() => {
    const newsItemlUrl = newsEnvUrl + '/api/v1/community/info/'
    const fetchData = async () => {
      const res = await getRequest(newsItemlUrl)
      setactivities(res.data.result.activities)
      setAnnouncements(res.data.result.announcements)
      setBlogsItem(res.data.result.blogs)
      setVoices(res.data.result.voices)
    }
    fetchData()
  }, [])

  return (
    <div id={'community'}>
      <div className={'getnew-banner'}>
        <img className={'ecosystem-banner-pc'} src={bannerCommunity} alt="img" />
        <img className={'ecosystem-banner-h5'} src={bannerCommunityH5} alt="img" />

        <h2>{intl.formatMessage({ id: 'COMMUNITY' })}</h2>
      </div>
      <div className={'community-news'}>
        <div className={'container'}>
          <div className={'news news-activity'}>
            <h2>{intl.formatMessage({ id: 'Activity' })}</h2>
            <ul>
              {activities && activities.length > 0 ? (
                activities.map((item: any, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url} key={index}>
                        <div className={'news-img'}>
                          <img src={item.image} alt="img" />
                        </div>
                        <div className={'news-title'}>
                          <h3>{item.title}</h3>
                          <p>{arrDate(item.created_at)}</p>
                        </div>
                      </Link>
                    </li>
                  )
                })
              ) : (
                <Loading />
              )}
            </ul>
            <div className={'news-more'}>
              <Link getProps={isActive} to="/activity/">
                {intl.formatMessage({ id: 'More' })}
              </Link>
            </div>
          </div>
          <div className={'news announcements'}>
            <h2>{intl.formatMessage({ id: 'Announcements' })}</h2>
            <ul>
              {announcements && announcements.length > 0 ? (
                announcements.map((item: any, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url} key={index}>
                        <div className={'news-img'}>
                          <img src={item.image == '' ? announcementImg : item.image} alt="img" />
                        </div>
                        <div className={'news-title'}>
                          <h3>{item.title}</h3>
                          <p>{arrDate(item.created_at)}</p>
                        </div>
                      </Link>
                    </li>
                  )
                })
              ) : (
                <Loading />
              )}
            </ul>
            <div className={'news-more'}>
              <Link getProps={isActive} to="/announcement/">
                {intl.formatMessage({ id: 'More' })}
              </Link>
            </div>
          </div>
          <News title={'Press'} />
          <div className={'news'}>
            <h2>{intl.formatMessage({ id: 'Blog' })}</h2>
            <ul>
              {blogsItem && blogsItem.length > 0 ? (
                blogsItem.map((item: any, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url} key={index}>
                        <div className={'news-img'}>
                          <img src={item.image} alt="img" />
                        </div>
                        <div className={'news-title'}>
                          <h3>{item.title}</h3>
                          <p>{arrDate(item.created_at)}</p>
                        </div>
                      </Link>
                    </li>
                  )
                })
              ) : (
                <Loading />
              )}
            </ul>
            <div className={'news-more'}>
              <Link getProps={isActive} to="/blog/">
                {intl.formatMessage({ id: 'More' })}
              </Link>
            </div>
          </div>
          <div className={'news'}>
            <h2>{intl.formatMessage({ id: 'Community Voice' })}</h2>
            <ul>
              {voices && voices.length > 0 ? (
                voices.map((item: any, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.url} key={index}>
                        <div className={'news-img'}>
                          <img src={item.image} alt="img" />
                        </div>
                        <div className={'news-title'}>
                          <h3>{item.title}</h3>
                          <p>{arrDate(item.created_at)}</p>
                        </div>
                      </Link>
                    </li>
                  )
                })
              ) : (
                <Loading />
              )}
            </ul>
            <div className={'news-more'}>
              <Link getProps={isActive} to="/voice/">
                {intl.formatMessage({ id: 'More' })}
              </Link>
            </div>
          </div>
          <GlobalCommunity title={intl.formatMessage({ id: 'Social Network' })} />
        </div>
      </div>
      <SubmitContent />
    </div>
  )
}
