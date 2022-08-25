import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl, Link } from 'gatsby-plugin-intl-v6'
import { newsEnvUrl } from '../utils/url'
import { getRequest } from '../utils/axiosData'
import { arrDate } from '../utils/createTime'
import { Skeleton } from 'antd'

function CommunitySide() {
  const intl = useIntl()
  const [createdAt, setCreatedAt]: any = useState()
  const [dataTitle, setDataTitle]: any = useState()
  const [dataContent, setDataContent]: any = useState()
  let path: any
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    path = window.location.pathname
    path = path.match(/^\/.*?\/(.*)$/ || [])[1]
  }

  let hrefTitle = ''
  if (path) {
    hrefTitle = path.split('/')[0]
  }

  if (hrefTitle == 'announcement') {
    hrefTitle = 'Announcements'
  } else if (hrefTitle == 'activity') {
    hrefTitle = 'Activity'
  } else if (hrefTitle == 'press') {
    hrefTitle = 'Press'
  } else if (hrefTitle == 'blog') {
    hrefTitle = 'Blog'
  } else if (hrefTitle == 'community-voice') {
    hrefTitle = 'Community Voice'
  }

  let twitterUrl: any
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    twitterUrl = window.location.href
  }

  useEffect(() => {
    const listUrl = newsEnvUrl + '/api/v1/community/entry-detail?path=' + path

    const fetchData = async () => {
      const res = await getRequest(listUrl)

      if (Object.keys(res.data.result).length === 0) return
      setCreatedAt(arrDate(res.data.result.created_at))
      setDataTitle(res.data.result.title)
      setDataContent(res.data.result.content)
      console.log('res', res)
    }
    fetchData()
  }, [])

  let headerTitle = [
    {
      url: 'announcement',
      content: 'Announcements'
    },
    {
      url: 'activity',
      content: 'Activity'
    },
    {
      url: 'press',
      content: 'Press'
    },
    {
      url: 'blog',
      content: 'Blog'
    },
    {
      url: 'voice',
      content: 'Community Voice'
    }
  ]
  return (
    <>
      <div className={'community-tab'}>
        <div className={'container'}>
          {headerTitle.map((item, index) => {
            return (
              // <Link key={index} to={'/' + item.url + '/'} className={ hrefTitle == item.content ? 'active' : ''}></Link>
              <Link key={index} to={'/' + item.url + '/'}>
                {intl.formatMessage({ id: `${item.content}` })}
              </Link>
            )
          })}
        </div>
      </div>
      <div className={'community-tab-h5'}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                {/* <span>{intl.formatMessage({ id: `${hrefTitle}` })}</span> */}
                <span>{hrefTitle}</span>
                <StaticImage
                  className={open ? 'avtice-bot bot' : ' bot'}
                  placeholder="blurred"
                  alt="img"
                  src="../static/images/header-bot-hover.png"
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className={'container tab-list'}>
                  {headerTitle.map((item, index) => {
                    return (
                      <Link key={index} to={'/' + item.url + '/'}>
                        {intl.formatMessage({ id: `${item.content}` })}
                      </Link>
                    )
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className={'container community-side'}>
        <p className={'time'}>{createdAt}</p>
        <h2>{!dataTitle ? <Skeleton paragraph={{ rows: 0 }} active /> : dataTitle}</h2>
        <div className={'author-box'}>
          <div className={'author'}>
            <StaticImage
              className={'img'}
              placeholder="blurred"
              alt="newton logo"
              src="../static/images/newton-logo.png"
            />
            {intl.formatMessage({ id: 'Newton' })}
          </div>
          <div className={'share'}>
            <a href={'https://twitter.com/intent/tweet?text=' + dataTitle + twitterUrl} target="_blank">
              <span className={'share-span'}>share</span>
              <StaticImage
                className={'img'}
                placeholder="blurred"
                alt="newton logo"
                src="../static/images/home/twitter.png"
              />
            </a>
          </div>
        </div>
        <div className={'side-list'}>
          {!dataContent ? (
            <Skeleton paragraph={{ rows: 10 }} active />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: dataContent }}></div>
          )}
        </div>
      </div>
    </>
  )
}
export default CommunitySide
