import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const News = () => (
    <>
        <div className={'news'}>
            <h2>News</h2>
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
    </>
)

export default News
