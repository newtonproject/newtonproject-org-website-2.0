import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const News = () => (
    <>
        <div className={'news'}>
            <h2>News</h2>
            <ul>
                <li>
                    <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/news.png' /></div>
                    <div className={'news-title'}>
                        <h3>The Black Men in White Coats Youth Summxs White Coats Youth</h3>
                        <p>March 16, 2022</p>
                    </div>
                </li>
                <li>
                    <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/build-img.png' /></div>
                    <div className={'news-title'}>
                        <h3>The Black Men in White Coats The Black Men in White CoatsThe Black Men in White CoatsThe Black Men in White Coats</h3>
                        <p>March 16, 2022</p>
                    </div>
                </li>
                <li>
                    <div className={'news-img'} ><StaticImage alt='img' src='../../static/images/home/stake-img.png' /></div>
                    <div className={'news-title'}>
                        <h3>The Black Men in White Coats Youth Sum</h3>
                        <p>March 16, 2022</p>
                    </div>
                </li>
            </ul>
        </div>
    </>
)

export default News
