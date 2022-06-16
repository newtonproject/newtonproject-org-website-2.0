import React, { cloneElement, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import axios from "axios"
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

export default function Banner() {
    const [bannerItem, setBannerItem] = useState([])
    useEffect(() => {
        axios.get(
            'https://www.newtonproject.org/api/v1/home/banner/'
        ).then((res) => {
            setBannerItem(res.data.result.banner);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className={'banner-pc'}>
                <div className={'banner-centent'}>
                    <div className={'banner-news'}>
                        {
                            bannerItem.map((item: any, index) => {
                                return (
                                    <p className='mb-2' key={index}>
                                        <a href={'https://www.newtonproject.org/' + item.url} target='_blank'>
                                            {
                                               index == 0 ? Weekly(item.title) : item.title 
                                            }
                                            <span>{arrDate(item.created_at)}</span>
                                        </a>
                                    </p>
                                )
                            })
                        }
                        {/* <p className='mb-2'><a href='https://www.newtonproject.org/announcement/2022/06/14/newton-weekly-20220606-20220612/' target='_blank'>Newton Weekly<span>06/06/2022 - 06/12 • 06/14</span></a></p>
                        <p><a href='https://www.newtonproject.org/blog/2021/04/14/mining-instructions-en/' target='_blank'>Mining Instructions<span>14/04/2021</span></a></p> */}
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
function arrDate(dateTime:string) {
    let dateArr = dateTime.split(" ")
    let timeArr = dateArr[0].split("-")
    return timeArr[2] + '/' + timeArr[1] + '/' + timeArr[0]
}

function Weekly(WeeklyItem:string) {
    let dateItem = WeeklyItem.split(" | ")
    let dateArrItem = dateItem[1].split("-")
    let dateItemArr0 = dateArrItem[0].split(".")
    let dateItemArr1 = dateArrItem[1].split(".")
    return dateItem[0] + ' ' + dateItemArr0[2] + '/' + dateItemArr0[1] + '/' + dateItemArr0[0] + '-' + dateItemArr1[2] + '/' + dateItemArr1[1] + '/' + dateItemArr1[0]
}
