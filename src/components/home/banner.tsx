import React, { useEffect, useState } from 'react'
import axios from "axios"
import bannerMobileImg from '../../static/images/banner.png'
import { arrDateBanner, Weekly } from '../../hooks/createTime'

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

export default function Banner() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                "https://www.newtonproject.org/api/v1/home/banner/"
            );
            setData(res.data.result.banner);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className={'banner-pc container'}>
                <div className={'banner-centent'}>
                    <div className={'banner-news'}>
                        {
                            data.map((item: any, index) => {
                                return (
                                    <p className='mb-2' key={index}>
                                        <a href={'https://www.newtonproject.org/' + item.url} target='_blank'>
                                            {
                                                index == 0 ? Weekly(item.title) : item.title
                                            }
                                            <span>{arrDateBanner(item.created_at)}</span>
                                        </a>
                                    </p>
                                )
                            })
                        }
                        <div className={'banner-title'}>
                            Infrastructure<br />For The<br />Community<br />Economy
                        </div>
                    </div>
                    <div className={'banner-img'}>
                        <img src={bannerMobileImg} alt='img' />
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
                <div className={'banner-mobile container'}>
                    <div className={'banner-title'}>
                        Infrastructure<br />For The<br />Community Economy
                </div>
                </div>
                <div className={'banner-img'}>
                    <img src={bannerMobileImg} alt='img' />
                </div>
                <div className={'banner-mobile banner-mobile-news container'}>
                    <div className={'banner-news'}>
                        {
                            data.map((item: any, index) => {
                                return (
                                    <p className='mb-2' key={index}>
                                        <a href={'https://www.newtonproject.org/' + item.url} target='_blank'>
                                            {
                                                index == 0 ? Weekly(item.title) : item.title
                                            }
                                            <span>{arrDateBanner(item.created_at)}</span>
                                        </a>
                                    </p>
                                )
                            })
                        }
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

