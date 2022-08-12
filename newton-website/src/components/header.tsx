import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HeaderModal from './headerModal'
import Language from './languages'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { newsEnvUrl } from '../utils/url'

export default function Header() {
  const intl = useIntl()
  const isActive = ({ isCurrent }: any) => {
    return isCurrent ? { className: 'active' } : {}
  }

  const [activeName, setActiveName] = useState(false)
  const [activeLearn, setActiveLearn] = useState(false)
  const [activedevelopers, setActiveDevelopers] = useState(false)
  const [activeCommunity, setActiveCommunity] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const herf = window.location.pathname
      const herfName = herf.split('/')[2]
      // console.log('====111', herfName)
      herfName == 'getnew' ? setActiveName(true) : setActiveName(false)
      herfName == 'newton2' || herfName == 'evt' || herfName == 'roadmap' ? setActiveLearn(true) : setActiveLearn(false)
      herfName == 'developers' ? setActiveDevelopers(true) : setActiveDevelopers(false)
      herfName == 'announcements' ||
      herfName == 'activity' ||
      herfName == 'press' ||
      herfName == 'blog' ||
      herfName == 'voice'
        ? setActiveCommunity(true)
        : setActiveCommunity(false)
    }
  })

  return (
    <>
      <div className={'header'}>
        <div className={'header-logo'}>
          <div>
            <Link to="/">
              <StaticImage className="w-32" alt="logo" placeholder="blurred" src="../static/images/logo.png" />
            </Link>
          </div>
          <ul>
            <li className={'header-use'}>
              <div className={activeName ? 'use active' : 'use'}>
                {intl.formatMessage({ id: 'Use Newton' })}
                <span className={activeName ? 'activeImg' : ''}></span>
              </div>
              <div className={'header-down'}>
                <Link getProps={isActive} to="/getnew/">
                  {intl.formatMessage({ id: 'Get New' })}
                </Link>
                <a href={newsEnvUrl + '/newpay/'} target="_blank">
                  {intl.formatMessage({ id: 'NewPay' })}
                </a>
                <a
                  href="https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
                  target="_blank"
                >
                  {intl.formatMessage({ id: 'NewMask' })}
                </a>
                <a href="https://explorer.newtonproject.org/" target="_blank">
                  {intl.formatMessage({ id: 'NewExplorer' })}
                </a>
                <a href="https://newbridge.network/" target="_blank">
                  {intl.formatMessage({ id: 'NewBridge' })}
                </a>
                <a href="https://nft.newscan.io/" target="_blank">
                  {intl.formatMessage({ id: 'NFT Viewer' })}
                </a>
              </div>
            </li>
            <li className={'header-use header-learn'}>
              <div className={activeLearn ? 'use active' : 'use'}>
                {intl.formatMessage({ id: 'Learn' })}
                <span className={activeLearn ? 'activeImg' : ''}></span>
              </div>
              <div className={'header-down'}>
                <Link getProps={isActive} to="/newton2/">
                  {intl.formatMessage({ id: 'Newton2.0' })}
                </Link>
                <Link getProps={isActive} to="/evt/">
                  {intl.formatMessage({ id: 'EVT' })}
                </Link>
                <Link getProps={isActive} to="/roadmap/">
                  {intl.formatMessage({ id: 'Roadmap' })}
                </Link>
              </div>
            </li>
            <li>
              <Link getProps={isActive} to="/developers/docs/" className={activedevelopers ? 'active' : ''}>
                {intl.formatMessage({ id: 'Developers' })}
              </Link>
            </li>
            <li>
              <Link getProps={isActive} to="/announcements/" className={activeCommunity ? 'active' : ''}>
                {intl.formatMessage({ id: 'Community' })}
              </Link>
            </li>
            <li>
              <Link getProps={isActive} to="/ecosystem/">
                {intl.formatMessage({ id: 'Ecosystem' })}
              </Link>
            </li>
          </ul>
          <div className={'header-search'}>
            <div className={'search'}>
              <a href={newsEnvUrl + '/search/?q='} target="_blank"></a>
              {/* <input type="text" placeholder="Search"></input> */}
            </div>
            <Language />
          </div>
        </div>
      </div>
      {/* header mobile */}
      <div className={'header-mobile-box'}>
        <HeaderModal />
      </div>
    </>
  )
}
