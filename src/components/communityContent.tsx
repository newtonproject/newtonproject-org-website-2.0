import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import GlobalCommunity from '../components/home/globalCommunity'
import SubmitContent from './submitContent'
import axios from "axios"
import News from '../components/home/news'
import { arrDate } from '../hooks/createTime'
import bannerCommunity from '../static/images/ecosystem/community-banner.png'
import bannerCommunityH5 from '../static/images/ecosystem/community-banner-h5.png'

export default function CommunityContent() {

    const [activities, setactivities] = useState([])
    const [announcements, setAnnouncements] = useState([])
    const [blogsItem, setBlogsItem] = useState([])
    const [voices, setVoices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                "https://www.newtonproject.org/api/v1/community/info/"
            );
            setactivities(res.data.result.activities)
            setAnnouncements(res.data.result.announcements)
            setBlogsItem(res.data.result.blogs);
            setVoices(res.data.result.voices);
        };
        fetchData();
    }, []);

    return (
        <div id={'community'}>
            <div className={'getnew-banner container'}>
                <img className={'ecosystem-banner-pc'} src={bannerCommunity} alt='img' />
                <img className={'ecosystem-banner-h5'} src={bannerCommunityH5} alt='img' />
                <h2>C O M M U N I T Y</h2>
            </div>
            <div className={'community-news'}>
                <div className={'container'}>
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
                    <div className={'news announcements'}>
                        <h2>Announcements</h2>
                        <ul>
                            {
                                announcements.map((item: any, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={'https://www.newtonproject.org/' + item.url} target='_blank' key={index}>
                                                <div className={'news-img'} >
                                                    {
                                                        item.image == ' ' ?
                                                            <img src={item.image} alt='img' /> :
                                                            <StaticImage alt='new-mall' src='../static/images/ecosystem/announcements.png' />
                                                    }
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
                            {
                                voices.map((item: any, index) => {
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
                        <div className={'news-more'}><a href='https://www.newtonproject.org/community-voice/' target='_blank'>More</a></div>
                    </div>
                    <GlobalCommunity title={'Social Network'} />
                </div>
            </div>
            <SubmitContent />
        </div>
    )
}
