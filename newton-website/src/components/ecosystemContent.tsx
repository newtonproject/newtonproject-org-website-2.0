import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import bannerEcosystem from '../static/images/ecosystem/ecosystem-banner.png'
import bannerEcosystemH5 from '../static/images/ecosystem/ecosystem-banner-h5.png'
import { useIntl } from 'gatsby-plugin-intl-v6'
import { newsEnvUrl } from '../utils/url'

export default function EcosystemContent() {
  const intl = useIntl()

  return (
    <div id={'ecosystem'}>
      <div className={'getnew-banner'}>
        <img className={'ecosystem-banner-pc'} src={bannerEcosystem} alt="img" />
        <img className={'ecosystem-banner-h5'} src={bannerEcosystemH5} alt="img" />
        <h2>{intl.formatMessage({ id: 'ECOSYSTEM' })}</h2>
      </div>
      <div className={'ecosystem-content ecosystem-container container'}>
        <dl>
          <dt>
            <i></i>
            {intl.formatMessage({ id: 'NFT' })}
          </dt>
          <dd className={'new-mall'}>
            <a href="https://newmall.io/" target="_blank">
              <StaticImage placeholder="blurred" alt="new-mall" src="../static/images/ecosystem/new-mall.png" />
              <span>{intl.formatMessage({ id: 'Leading NFT Market.' })}</span>
            </a>
          </dd>
          <dd className={'new-asset'}>
            <a href={newsEnvUrl + '/newasset-generator/'} target="_blank">
              <StaticImage placeholder="blurred" alt="new-asset" src="../static/images/ecosystem/new-asset.png" />
              <span>{intl.formatMessage({ id: 'Token Generator Tool on NewChain.' })}</span>
            </a>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            {intl.formatMessage({ id: 'Wallet' })}
          </dt>
          <dd className={'new-mall'}>
            <a href={newsEnvUrl + '/newpay/'} target="_blank">
              <StaticImage placeholder="blurred" alt="new-pay" src="../static/images/ecosystem/new-pay.png" />
              <span>{intl.formatMessage({ id: 'Decentralized Digital Wallet Of Newton Community Economy.' })}</span>
            </a>
          </dd>
          <dd className={'new-mask'}>
            <a
              href="https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
              target="_blank"
            >
              <StaticImage placeholder="blurred" alt="new-mask" src="../static/images/ecosystem/new-mask.png" />
              <span>
                {intl.formatMessage({ id: 'An extension for accessing NewChain enabled distributed applications.' })}
              </span>
            </a>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            {intl.formatMessage({ id: 'Cross-chain' })}
          </dt>
          <dd className={'new-bridge'}>
            <a href="https://newbridge.network/" target="_blank">
              <StaticImage placeholder="blurred" alt="new-bridge" src="../static/images/ecosystem/new-bridge.png" />
              <span>
                {intl.formatMessage({ id: 'Supports Inter-Chain token transfer between NewChain and others.' })}
              </span>
            </a>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            {intl.formatMessage({ id: 'Metaverse' })}
          </dt>
          <dd className={'andverse'}>
            <a href="https://www.andverse.org/" target="_blank">
              <StaticImage placeholder="blurred" alt="andverse" src="../static/images/ecosystem/andverse.png" />
              <span>{intl.formatMessage({ id: 'A decentralized multigalactic metaverse.' })}</span>
            </a>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            {intl.formatMessage({ id: 'DEX' })}
          </dt>
          <dd className={'new-swap'}>
            <a href="https://newswap.org/" target="_blank">
              <StaticImage placeholder="blurred" alt="new-swap" src="../static/images/ecosystem/new-swap.png" />
              <span>{intl.formatMessage({ id: 'Decentralized Exchange Protocol on NewChain.' })}</span>
            </a>
          </dd>
          <dd>
            <a href="https://www.binance.org/" target="_blank" className={'econmy'}>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed5.png" />
              <span>{intl.formatMessage({ id: 'The best-performing decentralized economy.' })}</span>
            </a>
          </dd>
        </dl>
        <dl>
          <dt>
            <i></i>
            {intl.formatMessage({ id: 'Exchange' })}
          </dt>
          <dd className={'exchange1'}>
            <a href="https://www.htx.com/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/htx.png" />
              <span>{intl.formatMessage({ id: 'Leading Crypto Exchange for BTC, ETH, XRP, and 600+ Altcoins.' })}</span>
            </a>
          </dd>
          <dd className={'exchange1'}>
            <a href="https://www.mexc.com/" target="_blank">
              <StaticImage placeholder="blurred" alt="new-swap" src="../static/images/getnew/mexc.png" />
              <span>{intl.formatMessage({ id: 'The First User-friendly Cryptocurrency Service Provider.' })}</span>
            </a>
          </dd>
        </dl>
      </div>
      <div className={'ecosystem-submit'}>
        <a href="https://github.com/newtonproject/ecosystem-projects" target="_blank" className={'submit-box'}>
          <i className={'submit'}>{intl.formatMessage({ id: 'Submit Your project' })}</i>
          {/* <span className={'add-content'}>{intl.formatMessage({ id: 'Create a Newton Community With Us' })}</span>
          <i className={'add-community'}>{intl.formatMessage({ id: 'Add Community' })}</i> */}
        </a>
      </div>
    </div>
  )
}
