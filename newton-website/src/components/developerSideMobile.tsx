import React from 'react'
import { Disclosure } from '@headlessui/react'
import { useIntl, Link } from 'gatsby-plugin-intl-v6'
import { StaticImage } from 'gatsby-plugin-image'

function DeveloperSideMobile() {
  const intl = useIntl()
  const isActive = ({ isCurrent }: any) => {
    return isCurrent ? { className: 'active' } : {}
  }
  let hrefTitle = intl.formatMessage({ id: 'Overview' })
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const herf = window.location.pathname
    const herfName = herf.split('/')[4]

    if (herfName == '' || undefined) {
      hrefTitle = 'Overview'
    } else {
      hrefTitle = herfName[0].toUpperCase() + herfName.substr(1)
      let arr = hrefTitle.split('-')
      hrefTitle = arr.join(' ')
    }
  }

  return (
    <div className={'developers-mobile'}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={'title'}>
              <span>{intl.formatMessage({ id: `${hrefTitle}` })}</span>
              <StaticImage
                className={open ? 'avtice-bot' : 'bot'}
                placeholder="blurred"
                alt="img"
                src="../static/images/header-bot-hover.png"
              />
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className={'developers-content'}>
                <div className={'overview'}>
                  <Link getProps={isActive} to="/developers/docs/">
                    {intl.formatMessage({ id: 'Overview' })}
                  </Link>
                </div>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                        <span>{intl.formatMessage({ id: 'Intro to Newton' })}</span>
                        {open ? (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot-hover.png" />
                        ) : (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot.png" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className={'nav-title-list'}>
                        <Link getProps={isActive} to="/developers/docs/consensus/">
                          {intl.formatMessage({ id: 'Consensus' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/white-papers">
                          {intl.formatMessage({ id: 'Whitepapers' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/projects">
                          {intl.formatMessage({ id: 'Projects' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/audits">
                          {intl.formatMessage({ id: 'Audits' })}
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                        <span>{intl.formatMessage({ id: 'Quick start' })}</span>
                        {open ? (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot-hover.png" />
                        ) : (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot.png" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className={'nav-title-list'}>
                        <Link getProps={isActive} to="/developers/docs/run-a-node/">
                          {intl.formatMessage({ id: 'Run a node' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/mining/">
                          {intl.formatMessage({ id: 'Mining' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/get-faucet/">
                          {intl.formatMessage({ id: 'Get Faucet' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/wallet/">
                          {intl.formatMessage({ id: 'Wallet' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/transaction/">
                          {intl.formatMessage({ id: 'Transaction' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/develop-evt/">
                          {intl.formatMessage({ id: 'Develop EVT' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/exchange-integration/">
                          {intl.formatMessage({ id: 'Exchange Integration' })}
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                        <span>{intl.formatMessage({ id: 'Specs' })}</span>
                        {open ? (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot-hover.png" />
                        ) : (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot.png" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className={'nav-title-list'}>
                        <Link getProps={isActive} to="/developers/docs/nep/">
                          {intl.formatMessage({ id: 'NEP' })}
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                        <span>{intl.formatMessage({ id: 'Community' })}</span>
                        {open ? (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot-hover.png" />
                        ) : (
                          <StaticImage placeholder="blurred" alt="img" src="../static/images/header-bot.png" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className={'nav-title-list'}>
                        <Link getProps={isActive} to="/developers/docs/workshop/">
                          {intl.formatMessage({ id: 'Workshop' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/hackathon/">
                          {intl.formatMessage({ id: 'Hackathon' })}
                        </Link>
                        <Link getProps={isActive} to="/developers/docs/grant/">
                          {intl.formatMessage({ id: 'Grant' })}
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
export default DeveloperSideMobile
