import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { newsEnvUrl } from '../utils/url'
import { getRequest } from '../utils/axiosData'
import { getQueryVariable } from '../utils/getQueryVariable'

function CommunitySide() {
  const intl = useIntl()
  const [dataTitle, setDataTitle]: any = useState()
  const [dataContent, setDataContent]: any = useState()
  let path: any = getQueryVariable('path')
  path != undefined ? (path = path.substr(1)) : ''
  let twitterUrl: any
  let hrefTitle: any
  hrefTitle != undefined ? (hrefTitle = path.split('/')[0]) : ''
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    twitterUrl = window.location.href
  }
  const isActive = ({ isCurrent }: any) => {
    console.log('isCurrent', isCurrent)
    return isCurrent ? { className: 'active' } : {}
  }
  useEffect(() => {
    const listUrl = newsEnvUrl + 'api/v1/community/entry-detail?path=' + path
    const fetchData = async () => {
      const res = await getRequest(listUrl)
      setDataTitle(res.data.result.title)
      setDataContent(res.data.result.content)
    }
    fetchData()
  }, [])
  // let a = DOMPurify.sanitize(dataContent);
  return (
    <>
      <div className={'community-tab'}>
        <div className={'container'}>
          <Link to="/announcements/">{intl.formatMessage({ id: 'Announcements' })}</Link>
          <Link to="/activity/">{intl.formatMessage({ id: 'Activity' })}</Link>
          <Link to="/press/">{intl.formatMessage({ id: 'Press' })}</Link>
          <Link to="/blog/" getProps={isActive}>
            {intl.formatMessage({ id: 'Blog' })}
          </Link>
          <Link to="/voice/">{intl.formatMessage({ id: 'Community Voice' })}</Link>
        </div>
      </div>
      <div className={'community-tab-h5'}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <span>{intl.formatMessage({ id: `${hrefTitle}` })}</span>
                <StaticImage
                  className={open ? 'avtice-bot bot' : ' bot'}
                  placeholder="blurred"
                  alt="img"
                  src="../static/images/header-bot-hover.png"
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className={'container tab-list'}>
                  <Link to="/announcements/">{intl.formatMessage({ id: 'Announcements' })}</Link>
                  <Link to="/activity/">{intl.formatMessage({ id: 'Activity' })}</Link>
                  <Link to="/press/">{intl.formatMessage({ id: 'Press' })}</Link>
                  <Link to="/blog/">{intl.formatMessage({ id: 'Blog' })}</Link>
                  <Link to="/voice/">{intl.formatMessage({ id: 'Community Voice' })}</Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className={'container community-side'}>
        <h2>{dataTitle}</h2>
        <div className={'author-box'}>
          <div className={'author'}>
            <StaticImage
              className={'img'}
              placeholder="blurred"
              alt="newton logo"
              src="../static/images/newton-logo.png"
            />
            {intl.formatMessage({ id: 'Newtonproject' })}
          </div>
          <div className={'share'}>
            <a href={'https://twitter.com/intent/tweet?text=' + dataTitle + twitterUrl} target="_blank">
              <span>share</span>
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
          <div dangerouslySetInnerHTML={{ __html: dataContent }}></div>
        </div>
      </div>
    </>
  )
}
export default CommunitySide
