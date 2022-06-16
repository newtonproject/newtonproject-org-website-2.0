import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import GlobalCommunity from '../components/home/globalCommunity'
import SubmitContent from './submitContent'
import axios from "axios"
import News from '../components/home/news'
import arrDate from '../hooks/createTime'

export default function CommunityContent() {
    const [activities, setactivities] = useState([])
    const [announcements, setAnnouncements] = useState([])
    const [blogsItem, setBlogsItem] = useState([])
    useEffect(() => {
        axios.get(
            'https://www.newtonproject.org/api/v1/community/info/'
        ).then((res) => {
            setactivities(res.data.result.activities)
            setAnnouncements(res.data.result.announcements)
            setBlogsItem(res.data.result.blogs);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div id={'community'}>
            <div className={'getnew-banner'}>
                <StaticImage className={'ecosystem-banner-pc'} alt='ecosystem-banner' src='../static/images/ecosystem/community-banner.png' />
                <StaticImage className={'ecosystem-banner-h5'} alt='ecosystem-banner' src='../static/images/ecosystem/community-banner-h5.png' />
                <h2>C O M M U N I T Y</h2>
            </div>
            <div className={'community-news'}>
                <div className={'news'}>
                    <h2>Activity</h2>
                    <ul>
                        {
                            activities.map((item: any, index) => {
                                return (
                                    <li key={index}>
                                        <a href={'https://www.newtonproject.org/' + item.url} target='_blank' key={index}>
                                            <div className={'news-img'} >
                                                <img src={item.image} alt='img' />
                                            </div>
                                            <div className={'news-title'}>
                                                <h3>{item.title}</h3>
                                                <p>{arrDate(item.created_at)}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={'news-more'}><a href='https://www.newtonproject.org/announcements/0/' target='_blank'>More</a></div>
                </div>
                <div className={'news'}>
                    <h2>Announcements</h2>
                    <ul>
                        {
                            announcements.map((item: any, index) => {
                                return (
                                    <li key={index}>
                                        <a href={'https://www.newtonproject.org/' + item.url} target='_blank' key={index}>
                                            <div className={'news-img'} >
                                                <img src={item.image} alt='img' />
                                            </div>
                                            <div className={'news-title'}>
                                                <h3>{item.title}</h3>
                                                <p>{arrDate(item.created_at)}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={'news-more'}><a href='https://www.newtonproject.org/announcements/1/' target='_blank'>More</a></div>
                </div>
                <News title={'Press'} />
                <div className={'news'}>
                    <h2>Blog</h2>
                    <ul>
                        {
                            blogsItem.map((item: any, index) => {
                                return (
                                    <li key={index}>
                                        <a href={'https://www.newtonproject.org/' + item.url} target='_blank' key={index}>
                                            <div className={'news-img'} >
                                                <img src={item.image} alt='img' />
                                            </div>
                                            <div className={'news-title'}>
                                                <h3>{item.title}</h3>
                                                <p>{arrDate(item.created_at)}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={'news-more'}><a href='https://www.newtonproject.org/blog/' target='_blank'>More</a></div>
                </div>
                <div className={'news'}>
                    <h2>Community Voice</h2>
                    <ul>
                        <li>
                            <a href='https://www.centralcharts.com/en/1224903-newton-new-usdt/analysis/144706-newton-new-usdt-daily' target='_blank'>
                                <div className={'news-img'} >
                                    <img src={'https://www.newtonproject.org/filestorage/uploads/press/2021/03/22/newswapmining.jpg'} alt='img' />
                                </div>
                                <div className={'news-title'}>
                                    <h3>NEWTON - NEW/USDT - Daily - Technical analysis published on 02/15/2021</h3>
                                    <p>February 16, 2021</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='https://mp.weixin.qq.com/s/sQItJfBIT0d8DgfqhaFAMA' target='_blank'>
                                <div className={'news-img'} >
                                    <img src={'https://www.newtonproject.org/filestorage/uploads/press/2021/03/22/newswapmining.jpg'} alt='img' />
                                </div>
                                <div className={'news-title'}>
                                    <h3>币源AMA之NewSwap流动性挖矿能带来什么</h3>
                                    <p>February 04, 2021</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.jinse.com/news/blockchain/691074.html' target='_blank'>
                                <div className={'news-img'} >
                                    <img src={'https://www.newtonproject.org/filestorage/uploads/press/2021/03/22/newswapmining.jpg'} alt='img' />
                                </div>
                                <div className={'news-title'}>
                                    <h3>基于牛顿基础设施的区块链发票之落地进展</h3>
                                    <p>May 27, 2020</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className={'news-more'}><a href='https://www.newtonproject.org/community-voice/' target='_blank'>More</a></div>
                </div>
                <GlobalCommunity title={'Social Network'} />
                <SubmitContent />
            </div>
        </div>
    )
}
