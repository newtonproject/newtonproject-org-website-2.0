import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import bannerGetnew from '../static/images/getnew/getnew-banner.png'
import bannerGetnewH5 from '../static/images/getnew/getnew-banner-h5.png'
import axios from "axios"
import { numFormat } from '../hooks/createTime'

export default function GetNewContent() {

    const [data, setData]: any = useState([]);
    const [balance, setBalance]: any = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                "https://legacy-explorer.newtonproject.org/api/v1/brief"
            );
            setData(res.data);
        };
        fetchData();
        axios.get(
            'https://legacy-explorer.newtonproject.org/api/v1/addr/NEW182E111111111111111111111111114FhDeS/'
        ).then((res) => {
            setBalance(res.data.balance);
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    return (
        <div id={'getnew'}>
            <div className={'ecosystem-banner getnew-banner'}>
                <img className={'ecosystem-banner-pc'} src={bannerGetnew} alt='img' />
                <img className={'ecosystem-banner-h5'} src={bannerGetnewH5} alt='img' />
                <h2>G E T&nbsp;&nbsp;N E W</h2>
            </div>
            <div className={'getnew-content container'}>
                <div className={'newtax'}>
                    <dl>
                        <dt><span><i></i>NewTax 2020</span></dt>
                        <dd>
                            <span><i>Address:</i><i>NEW182K9sX2KE3gw6o7WNNroW1K7FDuvhMfEtkF</i></span>
                            <span><i>Effective Time:</i><i>2020-01-01 17:48:57</i></span>
                        </dd>
                    </dl>
                    <dl className={'newtax-item'}>
                        <dt><span><i></i>NewTax 2019</span></dt>
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
                            <span>100 Billion NEW</span>
                        </dd>
                    </dl>
                    <dl className={'total-top top2'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew2.png' /></dt>
                        <dd>
                            <h3>Destroyed</h3>
                            <span>{numFormat(balance)} NEW</span>
                        </dd>
                    </dl>
                    <dl className={'total-top top3'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew3.png' /></dt>
                        <dd>
                            <h3>Circulating Supply</h3>
                            <span>{numFormat(data.circulating_supply)} NEW</span>
                        </dd>
                    </dl>
                    <dl className={'total-bottom bottom1'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew4.png' /></dt>
                        <dd>
                            <h3>Price of the Day</h3>
                            <span>{data.newton_price_usd} USD</span>
                        </dd>
                    </dl>
                    <dl className={'total-bottom bottom2'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew5.png' /></dt>
                        <dd>
                            <h3>Stake Total Amount</h3>
                            <span>{numFormat(data.locked_amount)} NEW</span>
                        </dd>
                    </dl>
                    <dl className={'total-bottom bottom3'}>
                        <dt><StaticImage alt='img' src='../static/images/getnew/getnew6.png' /></dt>
                        <dd>
                            <h3>Released on the Day</h3>
                            <span>{numFormat(data.incentive_release)} NEW</span>
                        </dd>
                    </dl>
                </div>
                <div className={'exchange'}>
                    <h2>Listed Exchange</h2>
                    <div className={'top-img'}>
                        <a href='https://www.huobi.com' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed1.png' /></a>
                        <a href='https://www.hb.co.kr/en-us/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed2.png' /></a>
                        <a href='https://www.biup.com/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed3.png' /></a>
                        <a href='https://www.mxc.com/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed4.png' /></a>
                        <a href='https://www.binance.org/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed5.png' /></a>
                        <a href='https://www.biki.com/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed6.png' /></a>
                        <a href='https://www.hkex.me/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed7.png' /></a>
                        <a href='https://www.bibull.co/' target='_blank'><StaticImage alt='img' src='../static/images/getnew/listed8.png' /></a>
                    </div>
                </div>
                <div className={'dex'}>
                    <h2>DEX</h2>
                    <a href='https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search' target='_blank'><StaticImage alt='img' src='../static/images/ecosystem/new-swap.png' /></a>
                </div>
                <div className={'dex Wallet'}>
                    <h2>Wallet</h2>
                    <div>
                        <a href='https://www.newtonproject.org/newpay/' target='_blank'><StaticImage alt='img' src='../static/images/ecosystem/new-pay.png' /></a>
                        <a href='https://newmall.io/' target='_blank' className={'new-mask'}><StaticImage alt='img' src='../static/images/ecosystem/new-mask.png' /></a>
                    </div>
                    <p><span>Announcement: </span>&lt;NewChain NEW and Binance NEW-09E SWAP instructions&gt;</p>
                </div>
            </div>
        </div>
    )
}



