import React, { useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'


function Developers() {
  const intl = useIntl()
  const tagList1 = ['consensus', 'whitepapers', 'projects', 'audits']
  const tagList2 = ['run-a-node', 'mining', 'get-faucet', 'wallet', 'transaction', 'smart-contracts']
  const tagList3 = ['nep']
  const tagList4 = ['workshop', 'hackathon', 'grant']
  const isActive = ({ isCurrent }: any) => {
    return isCurrent ? { className: 'active' } : {}
  }

  const isShow = (avctionList: any) => {
    // if()
    const herf = window.location.pathname
    const herfName = herf.split('/')[4]
    let activeName: any
    avctionList &&
      avctionList.forEach((val: any) => {
        if (val == herfName) {
          return (activeName = val)
        }
      })
    if (herf.indexOf(activeName) > -1) {
      return true
    }
    return false
  }
  

  return (
    <div className={'developers'}>
      <div className={'side-nav'}>
        <div className={'overview'}>
          <Link getProps={isActive} to="/developers/docs/">
            {intl.formatMessage({ id: 'Overview' })}
          </Link>
        </div>
        <Disclosure defaultOpen={isShow(tagList1)}>
          {({ open }) => (
            <>
              <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                <span>{intl.formatMessage({ id: 'Intro to Newton' })}</span>
                {open ? (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot-hover.png" />
                ) : (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot.png" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className={'nav-title-list'}>
                <Link getProps={isActive} to="/developers/docs/consensus/">
                  {intl.formatMessage({ id: 'Consensus' })}
                </Link>
                <Link getProps={isActive} to="/developers/docs/whitepapers">
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
        <Disclosure defaultOpen={isShow(tagList2)}>
          {({ open }) => (
            <>
              <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                <span>{intl.formatMessage({ id: 'Quick start' })}</span>
                {open ? (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot-hover.png" />
                ) : (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot.png" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className={'nav-title-list'}>
                <Link getProps={isActive} to="/developers/docs/run-a-node/">
                  {intl.formatMessage({ id: ' Run a node' })}
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
                <Link getProps={isActive} to="/developers/docs/smart-contracts/">
                  {intl.formatMessage({ id: 'Smart contracts' })}
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure defaultOpen={isShow(tagList3)}>
          {({ open }) => (
            <>
              <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                <span>{intl.formatMessage({ id: 'Specs' })}</span>
                {open ? (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot-hover.png" />
                ) : (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot.png" />
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
        <Disclosure defaultOpen={isShow(tagList4)}>
          {({ open }) => (
            <>
              <Disclosure.Button className={open ? 'nav-title-active nav-title' : 'nav-title'}>
                <span>{intl.formatMessage({ id: 'Community' })}</span>
                {open ? (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot-hover.png" />
                ) : (
                  <StaticImage placeholder="blurred" alt="img" src="../../static/images/header-bot.png" />
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
    </div>
  )
}
export default Developers
