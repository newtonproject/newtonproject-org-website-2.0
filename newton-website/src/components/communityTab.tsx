import React from 'react'
import { Disclosure } from '@headlessui/react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'
import bannerCommunity from '../static/images/community-banner.png'

function CommunityTab() {
  const intl = useIntl()

  const isActive = ({ isCurrent }: any) => {
    return isCurrent ? { className: 'active' } : {}
  }

  let hrefTitle = intl.formatMessage({ id: 'Announcements' })
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const herf = window.location.pathname
    const herfName = herf.split('/')[2]
    hrefTitle = herfName[0].toUpperCase() + herfName.substr(1)
    if (herfName === 'voice') {
      hrefTitle = 'Community Voice'
    } else if (herfName === 'announcement') {
      hrefTitle = 'Announcements'
    }
  }

  return (
    <>
      <div className={'community-tab'}>
        <div className={'container'}>
          <Link getProps={isActive} to="/announcement/">
            {intl.formatMessage({ id: 'Announcements' })}
          </Link>
          <Link getProps={isActive} to="/activity/">
            {intl.formatMessage({ id: 'Activity' })}
          </Link>
          <Link getProps={isActive} to="/press/">
            {intl.formatMessage({ id: 'Press' })}
          </Link>
          <Link getProps={isActive} to="/blog/">
            {intl.formatMessage({ id: 'Blog' })}
          </Link>
          <Link getProps={isActive} to="/voice/">
            {intl.formatMessage({ id: 'Community Voice' })}
          </Link>
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
                  <Link getProps={isActive} to="/announcement/">
                    {intl.formatMessage({ id: 'Announcements' })}
                  </Link>
                  <Link getProps={isActive} to="/activity/">
                    {intl.formatMessage({ id: 'Activity' })}
                  </Link>
                  <Link getProps={isActive} to="/press/">
                    {intl.formatMessage({ id: 'Press' })}
                  </Link>
                  <Link getProps={isActive} to="/blog/">
                    {intl.formatMessage({ id: 'Blog' })}
                  </Link>
                  <Link getProps={isActive} to="/voice/">
                    {intl.formatMessage({ id: 'Community Voice' })}
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className={'community-banner'}>
        <h2 className={'container banner'}>
          <span>{intl.formatMessage({ id: `${hrefTitle}` })}</span>
          {/* <StaticImage className="img" placeholder="blurred" alt="img" src="../static/images/community-banner.png" /> */}
          <img className={'img'} src={bannerCommunity} alt="banner img" />
        </h2>
      </div>
    </>
  )
}
export default CommunityTab
