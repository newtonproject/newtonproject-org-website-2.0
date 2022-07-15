import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HeaderModal from './headerModal'
import Language from './languages'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { newsEnvUrl } from '../utils/url'

export default function Header() {
  const intl = useIntl()

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
              <div className={'use'}>
                {intl.formatMessage({ id: 'Use Newton' })}
                <span></span>
              </div>
              <div className={'header-down'}>
                <Link to="/getnew/">{intl.formatMessage({ id: 'Get New' })}</Link>
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
              <div className={'use'}>
                {intl.formatMessage({ id: 'Learn' })}
                <span></span>
              </div>
              <div className={'header-down'}>
                <Link to="/newton2/">{intl.formatMessage({ id: 'Newton2.0' })}</Link>
                <Link to="/evt/">{intl.formatMessage({ id: 'EVT' })}</Link>
                <Link to="/roadmap/">{intl.formatMessage({ id: 'Roadmap' })}</Link>
              </div>
            </li>
            <li>
              <a href="https://developer.newtonproject.org/" target="_blank">
                {intl.formatMessage({ id: 'Developers' })}
              </a>
            </li>
            <li>
              <Link to="/community/">{intl.formatMessage({ id: 'Community' })}</Link>
            </li>
            <li>
              <Link to="/ecosystem/">{intl.formatMessage({ id: 'Ecosystem' })}</Link>
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
