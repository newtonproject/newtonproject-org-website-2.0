import React from 'react'
import { Link } from 'gatsby'
import banner from '../../static/images/banner.gif'
let bannerlist = [
    {
        title: 'NewPay',
        centent: 'Decentralized digital wallet',
        url: ''
    },
    {
        title: 'Get New',
        centent: 'Earned from the Ecosystem',
        url: ''
    },
    {
        title: 'NewExplorer',
        centent: 'Explorer & Analytics platform',
        url: ''
    },
    {
        title: 'NewBridge',
        centent: 'Realize asset exchange',
        url: ''
    }
];

export default function () {
    return (
        <>
            <div className={'banner-pc'}>
                <div className={'banner-centent'}>
                    <div className={'banner-news'}>
                        <p className='mb-2'>Newton Weekly<span>03/07/2022 - 03/13 • 03/4</span></p>
                        <p>Mining Instructions<span>14/04/2021</span></p>
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
                                <Link to={item.url} key={index}>
                                    <span>{item.title}</span>
                                    <i>{item.centent}</i>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'banner-mobile'}>
                <div className={'banner-title'}>
                    Infrastructure<br />For The<br />Community Economy
                </div>
                <div className={'banner-img'}>
                    <img src={banner} />
                </div>
                <div className={'banner-news'}>
                    <p className='mb-2'>Newton Weekly<span>03/07/2022 - 03/13 • 03/4</span></p>
                    <p>Mining Instructions<span>14/04/2021</span></p>
                </div>
                <div className={'banner-link'}>
                    {
                        bannerlist.map((item, index) => {
                            return (
                                <Link to={item.url} key={index}>
                                    <span>{item.title}</span>
                                    <i>{item.centent}</i>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
