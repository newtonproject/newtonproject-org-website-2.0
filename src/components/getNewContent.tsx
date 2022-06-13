import React, { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import axios from "axios"

export default function GetNewContent() {
    const [balance, setBalance] = React.useState<string>()
    const [circulating, setCirculating] = React.useState<string>()
    const [lockedAmount, setLockedAmount] = React.useState<string>()
    const [priceDay, setPriceDay] = React.useState<number>()
    const [incentiveRelease, setIncentiveRelease] = React.useState<string>()

    useEffect(() => {
        axios.get(
            'https://legacy-explorer.newtonproject.org/api/v1/brief'
        ).then((res) => {
            let price = res.data.newton_price_cny / res.data.newton_price_usd;
            setCirculating(res.data.circulating_supply);
            setLockedAmount(res.data.locked_amount);
            setPriceDay(price);
            setIncentiveRelease(res.data.incentive_release);
        }).catch((err) => {
            console.log(err)
        })
        axios.get(
            'https://legacy-explorer.newtonproject.org/api/v1/addr/NEW182E111111111111111111111111114FhDeS/'
        ).then((res) => {
            setBalance(res.data.balance);
        }).catch((err) => {
            console.log(err)
        })
    },[])
    return (
        <div id={'getnew'}>
            <div className={'ecosystem-banner getnew-banner'}>
                <StaticImage className={'ecosystem-banner-pc'} alt='ecosystem-banner' src='../static/images/getnew/getnew-banner.png' />
                <StaticImage className={'ecosystem-banner-h5'} alt='ecosystem-banner' src='../static/images/getnew/getnew-banner-h5.png' />
                <h2>G E T&nbsp;&nbsp;N E W</h2>
            </div>
            <div className={'getnew-content'}>
                <div className={'newtax'}>
                    <dl>
                        <dt><i></i>NewTax 2020</dt>
                        <dd>
                            <span><i>Address:</i><i>NEW182K9sX2KE3gw6o7WNNroW1K7FDuvhMfEtkF</i></span>
                            <span><i>Effective Time:</i><i>2020-01-01 17:48:57</i></span>
                        </dd>
                    </dl>
                    <dl className={'newtax-item'}>
                        <dt><i></i>NewTax 2019</dt>
                        <dd>
                            <span><i>Address:</i><i>NEW182K9sX2KE3gw6o7WNNroW1K7FDuvhMfEtkF</i></span>
                            <span><i>Effective Time:</i><i>2019-05-01 17:48:57 ~ 2020-01-01 17:48:57</i></span>
                        </dd>
                    </dl>
                </div>
                <div className={'newtax-content'}>NEW earned from Newton DApp Ecosystem makes NewTax.<br /> NEW from NewTax will release to NewPool for Newton community economy incentives. The release time and the usage of NewTax will be announced in the future.</div>
                <div className={'newtax-total'}>
                    <dl className={'total-top top1'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew1.png' /></dt>
                        <dd>
                            <h3>NEW Total Amount</h3>
                            <span>1000 亿</span>
                        </dd>
                    </dl>
                    <dl className={'total-top top2'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew2.png' /></dt>
                        <dd>
                            <h3>Destroyed</h3>
                            <span>{balance}</span>
                        </dd>
                    </dl>
                    <dl className={'total-top top3'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew3.png' /></dt>
                        <dd>
                            <h3>Circulating Supply</h3>
                            <span>{circulating}</span>
                        </dd>
                    </dl>
                    <dl className={'total-bottom bottom1'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew4.png' /></dt>
                        <dd>
                            <h3>Price of the Day</h3>
                            <span>{priceDay}</span>
                        </dd>
                    </dl>
                    <dl className={'total-bottom bottom2'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew5.png' /></dt>
                        <dd>
                            <h3>Stake Total Amount</h3>
                            <span>{lockedAmount}</span>
                        </dd>
                    </dl>
                    <dl className={'total-bottom bottom3'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew6.png' /></dt>
                        <dd>
                            <h3>Released on the Day</h3>
                            <span>{incentiveRelease}</span>
                        </dd>
                    </dl>
                </div>
                <div className={'exchange'}>
                    <h2>Listed Exchange</h2>
                    <div className={'top-img'}>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed1.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed2.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed3.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed4.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed5.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed6.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed7.png' /></a>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed8.png' /></a>
                    </div>
                </div>
                <div className={'dex'}>
                    <h2>DEX</h2>
                    <a href='' target='_blank'><StaticImage alt='img' src='../static/images/ecosystem/new-swap.png' /></a>
                </div>
                <div className={'dex'}>
                    <h2>Wallet</h2>
                    <div>
                        <a href='' target='_blank'><StaticImage alt='img' src='../static/images/ecosystem/new-pay.png' /></a>
                        <a href='' target='_blank' className={'new-mask'}><StaticImage alt='img' src='../static/images/ecosystem/new-mask.png' /></a>
                    </div>
                    <p><span>Announcement: </span>&lt;NewChain NEW and Binance NEW-09E SWAP instructions&gt;</p>
                </div>
            </div>
        </div>
    )
}



