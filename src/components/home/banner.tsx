import React from 'react'
import { Link } from 'gatsby'
import banner from '../../static/images/banner.gif'
import bannerMobileImg from '../../static/images/banner-h5.gif'
let bannerlist = [
    {
        title: 'NewPay',
        centent: 'Decentralized digital wallet',
        url: 'https://www.newtonproject.org/newpay/'
    },
    {
        title: 'Get New',
        centent: 'Earned from the Ecosystem',
        url: '/getnew'
    },
    {
        title: 'NewExplorer',
        centent: 'Explorer & Analytics platform',
        url: 'https://explorer.newtonproject.org/'
    },
    {
        title: 'NewBridge',
        centent: 'Realize asset exchange',
        url: 'https://newbridge.network/'
    }
];

export default function () {
    return (
        <>
            <div className={'banner-pc'}>
                <div className={'banner-centent'}>
                    <div className={'banner-news'}>
                        <p className='mb-2'><a href='https://www.newtonproject.org/announcement/2022/06/14/newton-weekly-20220606-20220612/' target='_blank'>Newton Weekly<span>06/06/2022 - 06/12 • 06/14</span></a></p>
                        <p><a href='https://www.newtonproject.org/blog/2021/04/14/mining-instructions-en/' target='_blank'>Mining Instructions<span>14/04/2021</span></a></p>
                        <div className={'banner-title'}>
                            Infrastructure<br />For The<br />Community<br />Economy
                        </div>
                    </div>
                    <div className={'banner-img'}>
                        <img src={banner} />
                    </div>
                </div>
                <div className={'banner-link'}>
                    {
                        bannerlist.map((item, index) => {
                            return (
                                <a href={item.url} key={index} target='_blank'>
                                    <span>{item.title}</span>
                                    <i>{item.centent}</i>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'banner-mobile-box'}>
                <div className={'banner-mobile'}>
                    <div className={'banner-title'}>
                        Infrastructure<br />For The<br />Community Economy
                </div>
                </div>
                <div className={'banner-img'}>
                    <img src={bannerMobileImg} />
                </div>
                <div className={'banner-mobile banner-mobile-news'}>
                    <div className={'banner-news'}>
                        <p className='mb-2'><a href='https://www.newtonproject.org/announcement/2022/06/14/newton-weekly-20220606-20220612/' target='_blank'>Newton Weekly<span>06/06/2022 - 06/12 • 06/14</span></a></p>
                        <p><a href='https://www.newtonproject.org/blog/2021/04/14/mining-instructions-en/' target='_blank'>Mining Instructions<span>14/04/2021</span></a></p>
                    </div>
                    <div className={'banner-link'}>
                        {
                            bannerlist.map((item, index) => {
                                return (
                                    <a href={item.url} key={index}>
                                        <span>{item.title}</span>
                                        <i>{item.centent}</i>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </>
    )
}
