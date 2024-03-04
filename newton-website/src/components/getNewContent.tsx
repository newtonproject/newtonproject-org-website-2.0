import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import bannerGetnew from '../static/images/getnew/getnew-banner.png'
import bannerGetnewH5 from '../static/images/getnew/getnew-banner-h5.png'
import { numFormat } from '../utils/createTime'
import { useIntl } from 'gatsby-plugin-intl-v6'
import { getRequest } from '../utils/axiosData'
import { getNewUrl, newsEnvUrl } from '../utils/url'

export default function GetNewContent() {
  const intl = useIntl()
  const [data, setData]: any = useState([])
  const [balance, setBalance]: any = useState([])

  useEffect(() => {
    const totalUrl = getNewUrl + '/api/v1/brief'
    const balanceUrl = getNewUrl + '/api/v1/addr/NEW182E111111111111111111111111114FhDeS/'
    const fetchData = async () => {
      const res = await getRequest(totalUrl)
      setData(res.data)
    }
    fetchData()
    const balanceData = async () => {
      const res = await getRequest(balanceUrl)
      setBalance(res.data.balance)
    }
    balanceData()
  }, [])
  return (
    <div id={'getnew'}>
      <div className={'ecosystem-banner getnew-banner'}>
        <img className={'ecosystem-banner-pc'} src={bannerGetnew} alt="img" />
        <img className={'ecosystem-banner-h5'} src={bannerGetnewH5} alt="img" />

        <h2>
          {intl.formatMessage({ id: 'G E T' })}&nbsp;&nbsp;{intl.formatMessage({ id: 'N E W' })}
        </h2>
      </div>
      <div className={'getnew-content container'}>
        <div className={'newtax'}>
          <dl>
            <dt>
              <span>
                <i></i>
                {intl.formatMessage({ id: 'NewTax 2020' })}
              </span>
            </dt>
            <dd>
              <span>
                <i>{intl.formatMessage({ id: 'Address' })}:&nbsp;</i>
                <a
                  href="https://explorer.newtonproject.org/address/0x4309037Eb881dC907d8301175cE7d004B76a202C/transactions"
                  target="_blank"
                >
                  <i>NEW182K9sX2KE3gw6o7WNNroW1K7FDuvhMfEtkF</i>
                </a>
              </span>
              <span>
                <i>{intl.formatMessage({ id: 'Effective Time' })}:&nbsp;</i>
                <i>2020-01-01 17:48:57</i>
              </span>
            </dd>
          </dl>
          <dl className={'newtax-item'}>
            <dt>
              <span>
                <i></i>
                {intl.formatMessage({ id: 'NewTax 2019' })}
              </span>
            </dt>
            <dd>
              <span>
                <i>{intl.formatMessage({ id: 'Address' })}:&nbsp;</i>
                <a
                  href="https://explorer.newtonproject.org/address/0x23cAa8bfe91db6c14b148bf54aE49DC19e386b35/transactions"
                  target="_blank"
                >
                  <i>NEW182GJfscSmL2TjVdqbcVm3uZKGgUSitCjxt4</i>
                </a>
              </span>
              <span>
                <i>{intl.formatMessage({ id: 'Effective Time' })}:&nbsp;</i>
                <i>2019-05-24 09:32:51 ~ 2020-01-01 17:48:56</i>
              </span>
            </dd>
          </dl>
        </div>
        <div className={'newtax-content'}>
          {intl.formatMessage({ id: 'NEW earned from Newton DApp Ecosystem makes NewTax.' })}
          <br />
          {intl.formatMessage({
            id: 'NEW from NewTax will release to NewPool for Newton community economy incentives. The release time and the usage of NewTax will be announced in the future.'
          })}
        </div>
        <div className={'newtax-total'}>
          <dl className={'total-top top1'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew1.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'NEW Total Amount' })}</h3>
              <span>100 {intl.formatMessage({ id: 'Billion' })} NEW</span>
            </dd>
          </dl>
          <dl className={'total-top top2'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew2.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Destroyed' })}</h3>
              <span>{balance !== '' ? numFormat(balance) : null} NEW</span>
            </dd>
          </dl>
          <dl className={'total-top top3'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew3.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Circulating Supply' })}</h3>
              <span>{data.circulating_supply !== '' ? numFormat(data.circulating_supply) : null} NEW</span>
            </dd>
          </dl>
          <dl className={'total-bottom bottom1'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew4.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Price of the Day' })}</h3>
              <span>{data.newton_price_usd !== '' ? data.newton_price_usd : null} USD</span>
            </dd>
          </dl>
          <dl className={'total-bottom bottom2'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew5.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Stake Total Amount' })}</h3>
              <span>{data.locked_amount !== '' ? numFormat(data.locked_amount) : null} NEW</span>
            </dd>
          </dl>
          <dl className={'total-bottom bottom3'}>
            <dt>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/getnew6.png" />
            </dt>
            <dd>
              <h3>{intl.formatMessage({ id: 'Released on the Day' })}</h3>
              <span>{data.incentive_release !== '' ? numFormat(data.incentive_release * 2) : null} NEW</span>
            </dd>
          </dl>
        </div>
        <div className={'exchange'}>
          <h2>{intl.formatMessage({ id: 'Listed Exchange' })}</h2>
          <div className={'top-img'}>
            <a href="https://www.htx.com/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/htx.png" />
            </a>
            <a href="https://www.mexc.com/" target="_blank" className={'mexc'}>
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/mexc.png" />
            </a>
          </div>
        </div>
        
        <div className={'dex'}>
          <h2>{intl.formatMessage({ id: 'DEX' })}</h2>
          <div className={'dex-a'}>
            <a href="https://newswap.org/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/ecosystem/new-swap.png" />
            </a>
            <a href="https://www.binance.org/" target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/getnew/listed5.png" />
            </a>
          </div>
        </div>
        <div className={'dex Wallet'}>
          <h2>{intl.formatMessage({ id: 'Wallet' })}</h2>
          <div>
            <a href={newsEnvUrl + '/newpay/'} target="_blank">
              <StaticImage placeholder="blurred" alt="img" src="../static/images/ecosystem/new-pay.png" />
            </a>
            <a
              href="https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
              target="_blank"
              className={'new-mask'}
            >
              <StaticImage placeholder="blurred" alt="img" src="../static/images/ecosystem/new-mask.png" />
            </a>
          </div>
          <p>
            <span>{intl.formatMessage({ id: 'Announcement' })}: </span>
            <a
              className={'wallet-a'}
              href={newsEnvUrl + '/announcement/2019/07/17/newchain-new-and-binance-new-09e-swap-instructions/'}
              target="_blank"
            >
              &lt;{intl.formatMessage({ id: 'NewChain NEW and Binance NEW-09E SWAP instructions' })}&gt;
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
