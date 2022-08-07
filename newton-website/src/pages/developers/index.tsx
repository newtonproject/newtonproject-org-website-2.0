import React, { useState } from 'react'
import NormalLayout from '../../components/NormalLayout'
import { PageModelTitle } from '../../model/PageModel'
import { Disclosure } from '@headlessui/react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'

export default Developers

function Developers() {
  let pageModel = new PageModelTitle('Developers', 'Developers-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

const navList: any = [
  {
    title: 'Intro to Newton',
    url: '',
    nav: ['Consensus', 'Whitepapers', 'Projects', 'Audits']
  },
  {
    title: 'Quick start',
    url: '',
    nav: ['Run a node', 'Mining', 'Get Faucet', 'Wallet', 'Transaction', 'Smart contracts']
  },
  {
    title: 'Specs',
    url: '',
    nav: ['NEP']
  },
  {
    title: 'Community',
    url: '',
    nav: ['Workshop', 'Hackathon', 'Grant']
  }
]

function Main() {
  return (
    <div className={'developers-box'}>
      <div className={'developers container'}>
        {/* nav */}
        <div>
          <Link to="/developers/docs/">Overview</Link>
        </div>
        <div className={'side-nav'}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={'nav-title'}>
                  <span>Intro to Newton</span>
                  <StaticImage
                    className={open ? '' : 'title-img'}
                    placeholder="blurred"
                    alt="img"
                    src="../../static/images/header-bot.png"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={'nav-title-list'}>
                  <Link to="/developers/docs/consensus/">Consensus</Link>
                  <Link to="/developers/docs/whitepapers">Whitepapers</Link>
                  <Link to="/developers/docs/projects">Projects</Link>
                  <Link to="/developers/docs/audits">Audits</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={'nav-title'}>
                  <span>Quick start</span>
                  <StaticImage
                    className={open ? '' : 'title-img'}
                    placeholder="blurred"
                    alt="img"
                    src="../../static/images/header-bot.png"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={'nav-title-list'}>
                  <Link to="">Run a node</Link>
                  <Link to="">Mining</Link>
                  <Link to="">Get Faucet</Link>
                  <Link to="">Wallet</Link>
                  <Link to="">Transaction</Link>
                  <Link to="">Smart contracts</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={'nav-title'}>
                  <span>Specs</span>
                  <StaticImage
                    className={open ? '' : 'title-img'}
                    placeholder="blurred"
                    alt="img"
                    src="../../static/images/header-bot.png"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={'nav-title-list'}>
                  <Link to="">NEP</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={'nav-title'}>
                  <span>Community</span>
                  <StaticImage
                    className={open ? '' : 'title-img'}
                    placeholder="blurred"
                    alt="img"
                    src="../../static/images/header-bot.png"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={'nav-title-list'}>
                  <Link to="">Workshop</Link>
                  <Link to="">Hackathon</Link>
                  <Link to="">Grant</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        {/* docs */}
        <div className={'developers-docs'}>docs</div>
      </div>
    </div>
  )
}
