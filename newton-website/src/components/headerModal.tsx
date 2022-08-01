import React, { Fragment, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import Languages from './languages'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { newsEnvUrl } from '../utils/url'

export default function HeaderModal() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <>
      <div className={'header-mobile'}>
        <div onClick={() => setMobileSidebarOpen(true)} className={'header-menu'}>
          <AiOutlineMenu />
        </div>
        <Transition.Root show={mobileSidebarOpen} as={Fragment}>
          <Dialog as="div" static className={'modal'} open={mobileSidebarOpen} onClose={setMobileSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="overlay" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div id="mobile-sidebar" className="mobile-sidebar">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className={'close-btn'}>
                    <button onClick={() => setMobileSidebarOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </Transition.Child>
                <nav>
                  <div>
                    <SiteNavMenu />
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0" aria-hidden="true"></div>
          </Dialog>
        </Transition.Root>
        <div>
          <Link to="/">
            <StaticImage placeholder="blurred" className={'logo'} alt="logo" src="../static/images/logo.png" />
          </Link>
        </div>
        {mobileSidebarOpen == false ? (
          <div className={'search'}>
            <a href={newsEnvUrl + '/search/?q='} target="_blank"></a>
          </div>
        ) : null}
      </div>
    </>
  )
}

const SiteNavMenu = () => {
  const intl = useIntl()
  return (
    <>
      <div className="header-nav-menu">
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
          <li className={'header-use'}>
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
      </div>
      <div className={'header-footer-box'}>
        <div className={'header-footer'}>
          <div className={'search'}>
            <a href={newsEnvUrl + '/search/?q='} target="_blank"></a>
            <p>{intl.formatMessage({ id: 'Search' })}</p>
          </div>
          <Languages />
        </div>
      </div>
    </>
  )
}
