import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import GlobalCommunity from '../components/home/globalCommunity'
import SubmitContent from './submitContent'

const CommunityContent = () => (
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
                    <li>
                        <a href='https://www.centralcharts.com/en/1224903-newton-new-usdt/analysis/144706-newton-new-usdt-daily' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news1.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>NEWTON - NEW/USDT - Daily - Technical analysis published on 02/15/2021</h3>
                                <p>February 16, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://mp.weixin.qq.com/s/sQItJfBIT0d8DgfqhaFAMA' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news2.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>币源AMA之NewSwap流动性挖矿能带来什么</h3>
                                <p>February 04, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.jinse.com/news/blockchain/691074.html' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news3.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>基于牛顿基础设施的区块链发票之落地进展</h3>
                                <p>May 27, 2020</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={'news-more'}><a href='https://www.newtonproject.org/announcements/0/' target='_blank'>More</a></div>
            </div>
            <div className={'news'}>
                <h2>Announcements</h2>
                <ul>
                    <li>
                        <a href='https://www.centralcharts.com/en/1224903-newton-new-usdt/analysis/144706-newton-new-usdt-daily' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news1.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>NEWTON - NEW/USDT - Daily - Technical analysis published on 02/15/2021</h3>
                                <p>February 16, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://mp.weixin.qq.com/s/sQItJfBIT0d8DgfqhaFAMA' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news2.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>币源AMA之NewSwap流动性挖矿能带来什么</h3>
                                <p>February 04, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.jinse.com/news/blockchain/691074.html' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news3.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>基于牛顿基础设施的区块链发票之落地进展</h3>
                                <p>May 27, 2020</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={'news-more'}><a href='https://www.newtonproject.org/announcements/1/' target='_blank'>More</a></div>
            </div>
            <div className={'news'}>
                <h2>Press</h2>
                <ul>
                    <li>
                        <a href='https://www.centralcharts.com/en/1224903-newton-new-usdt/analysis/144706-newton-new-usdt-daily' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news1.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>NEWTON - NEW/USDT - Daily - Technical analysis published on 02/15/2021</h3>
                                <p>February 16, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://mp.weixin.qq.com/s/sQItJfBIT0d8DgfqhaFAMA' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news2.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>币源AMA之NewSwap流动性挖矿能带来什么</h3>
                                <p>February 04, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.jinse.com/news/blockchain/691074.html' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news3.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>基于牛顿基础设施的区块链发票之落地进展</h3>
                                <p>May 27, 2020</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={'news-more'}><a href='https://www.newtonproject.org/press/' target='_blank'>More</a></div>
            </div>
            <div className={'news'}>
                <h2>Blog</h2>
                <ul>
                    <li>
                        <a href='https://www.centralcharts.com/en/1224903-newton-new-usdt/analysis/144706-newton-new-usdt-daily' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news1.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>NEWTON - NEW/USDT - Daily - Technical analysis published on 02/15/2021</h3>
                                <p>February 16, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://mp.weixin.qq.com/s/sQItJfBIT0d8DgfqhaFAMA' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news2.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>币源AMA之NewSwap流动性挖矿能带来什么</h3>
                                <p>February 04, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.jinse.com/news/blockchain/691074.html' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news3.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>基于牛顿基础设施的区块链发票之落地进展</h3>
                                <p>May 27, 2020</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={'news-more'}><a href='https://www.newtonproject.org/blog/' target='_blank'>More</a></div>
            </div>
            <div className={'news'}>
                <h2>Community Voice</h2>
                <ul>
                    <li>
                        <a href='https://www.centralcharts.com/en/1224903-newton-new-usdt/analysis/144706-newton-new-usdt-daily' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news1.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>NEWTON - NEW/USDT - Daily - Technical analysis published on 02/15/2021</h3>
                                <p>February 16, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://mp.weixin.qq.com/s/sQItJfBIT0d8DgfqhaFAMA' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news2.jpg' /></div>
                            <div className={'news-title'}>
                                <h3>币源AMA之NewSwap流动性挖矿能带来什么</h3>
                                <p>February 04, 2021</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.jinse.com/news/blockchain/691074.html' target='_blank'>
                            <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/news3.jpg' /></div>
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

export default CommunityContent
