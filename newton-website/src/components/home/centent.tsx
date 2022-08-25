import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl } from 'gatsby-plugin-intl-v6'
import { newsEnvUrl } from '../../utils/url'

export default function Centent() {
  const intl = useIntl()
  return (
    <>
      <div className={'centent-community'}>
        <h2>{intl.formatMessage({ id: "Newton's Community Economy" })}</h2>
        <ul>
          <li>
            <div>
              <StaticImage
                placeholder="blurred"
                className={'community-img'}
                alt="img"
                src="../../static/images/home/index-icon1.png"
              />
            </div>
            <h5>
              <i></i>
              {intl.formatMessage({ id: 'Users Own Their Own Data' })}
            </h5>
            <p>
              {intl.formatMessage({
                id: 'Users secure and control their personal data through cryptography, and manage their personal credit and share profits produced by their data in a pre-agreed manner.'
              })}
            </p>
          </li>
          <li>
            <div>
              <StaticImage
                placeholder="blurred"
                className={'community-img'}
                alt="img"
                src="../../static/images/home/index-icon2.png"
              />
            </div>
            <h5>
              <i></i>
              {intl.formatMessage({ id: 'Better Incentive Mechanisms' })}
            </h5>
            <p>
              {intl.formatMessage({
                id: "Replacing middlemen with technology reduces transaction costs and rewards anyone who contributes to the transaction, whether they're service providers, consumers or others connected by the value-based internet."
              })}
            </p>
          </li>
          <li>
            <div>
              <StaticImage
                placeholder="blurred"
                className={'community-img icon3'}
                alt="img"
                src="../../static/images/home/index-icon3.png"
              />
            </div>
            <h5>
              <i></i>
              {intl.formatMessage({ id: 'New Organization & Cooperation' })}
            </h5>
            <p>
              {intl.formatMessage({
                id: 'The community economy managed by non-profit foundations will replace the monopolies of middlemen managed by traditional for-profit organizations. Based on open, fair, and rational rules, every contributor will benefit from, and become part of this economy.'
              })}
            </p>
          </li>
        </ul>
        <div className={'news-more'}>
          <a href={newsEnvUrl + '/whitepaper/'} target="_blank">
            {intl.formatMessage({ id: 'White Paper' })}
          </a>
        </div>
      </div>

      <div className={'centent-build'}>
        <ul>
          <li>
            <h2>{intl.formatMessage({ id: 'Start Building' })}</h2>
            <p>
              {intl.formatMessage({
                id: "Newton's technology framework consists the basic technology layer, the hyper exchange protocol layer, and the application layer. All Newton’s products will be on NewChain-TestNet first for public testing before official launching. The Technical Documentation provides developers with a comprehensive development guide."
              })}
            </p>
            <div className={'building'}>
              <a href="https://developer.newtonproject.org/" target="_blank">
                {intl.formatMessage({ id: 'Start Building' })}
              </a>
              <a href="https://github.com/newtonproject/newchain-sdk-example" target="_blank">
                {intl.formatMessage({ id: 'Listing' })}
              </a>
            </div>
          </li>
          <li>
            <div>
              <StaticImage
                placeholder="blurred"
                className={'stake-img'}
                alt="img"
                src="../../static/images/home/build.png"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className={'centent-build'}>
        <ul>
          <li>
            <div>
              {' '}
              <StaticImage
                placeholder="blurred"
                className={'stake-img'}
                alt="img"
                src="../../static/images/home/stake-img.png"
              />
            </div>
          </li>
          <li>
            <h2>{intl.formatMessage({ id: 'Stake on Newton' })}</h2>
            <p>
              {intl.formatMessage({
                id: 'NewChain nodes are the key co-constructers of Newton infrastructure. Newton NewChain Testnet and Mainnet are opened to the community, individual can deploy Testnet and Mainnet according to the instructions specified in this repo. Afer deploying the NewChain Mainnet, the Mainnet ledger nodes can produce blocks and get NEW as the transaction fees from every transaction.'
              })}
            </p>
            <div className={'build-become'}>
              <a href={newsEnvUrl + '/blog/2021/04/14/new-mining-cn/'} target="_blank">
                {intl.formatMessage({ id: 'Stake' })}
              </a>
              <a href="https://github.com/newtonproject/newchain-nodes" target="_blank">
                {intl.formatMessage({ id: 'Become a validator' })}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <CentenMobile />
    </>
  )
}

const CentenMobile = () => {
  const intl = useIntl()
  return (
    <div className={'build-box'}>
      <div className={'build'}>
        <div>
          <h2>{intl.formatMessage({ id: 'Start Building' })}</h2>
          <div>
            <StaticImage
              placeholder="blurred"
              className={'stake-img'}
              alt="img"
              src="../../static/images/home/build.png"
            />
          </div>
          <p>
            {intl.formatMessage({
              id: "Newton's technology framework consists the basic technology layer, the hyper exchange protocol layer, and the application layer. All Newton’s products will be on NewChain-TestNet first for public testing before official launching. The Technical Documentation provides developers with a comprehensive development guide."
            })}
          </p>
          <div className={'build-a'}>
            <a href="https://developer.newtonproject.org/" target="_blank">
              {intl.formatMessage({ id: 'Start Building' })}
            </a>
            <a href="https://github.com/newtonproject/newchain-sdk-example" target="_blank">
              {intl.formatMessage({ id: 'Listing' })}
            </a>
          </div>
        </div>
      </div>
      <div className={'build build-item'}>
        <div>
          <h2>{intl.formatMessage({ id: 'Stake on Newton' })}</h2>
          <div>
            {' '}
            <StaticImage
              placeholder="blurred"
              className={'stake-img'}
              alt="img"
              src="../../static/images/home/stake-img.png"
            />
          </div>
        </div>
        <p>
          {intl.formatMessage({
            id: 'NewChain nodes are the key co-constructers of Newton infrastructure. Newton NewChain Testnet and Mainnet are opened to the community, individual can deploy Testnet and Mainnet according to the instructions specified in this repo. Afer deploying the NewChain Mainnet, the Mainnet ledger nodes can produce blocks and get NEW as the transaction fees from every transaction.'
          })}
        </p>
        <div className={'build-a build-become'}>
          <a href={newsEnvUrl + '/blog/2021/04/14/new-mining-cn/'} target="_blank">
            {intl.formatMessage({ id: 'Stake' })}
          </a>
          <a href="https://github.com/newtonproject/newchain-nodes" target="_blank">
            {intl.formatMessage({ id: 'Become a validator' })}
          </a>
        </div>
      </div>
    </div>
  )
}
